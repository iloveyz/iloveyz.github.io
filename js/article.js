(function () {
	$('.video-playlist br').remove();
	$(".video-playlist p").each(function(i) {
		if($(this).find("embed").length>=1){
			var sum = $(this).index()+1;
			$(this).append("<span><em>第"+sum+"集</em></span>");
			if($(this).html().indexOf("$")>-1){
				var vnc = $(this).find('i').html();
				$(this).find('i').remove();
				$(this).prepend("<cite><em>"+sum+"、"+vnc+"</em></cite>");
				$(this).find("span").remove();
			}
		}
		$(this).click(function(){
			var href = $(this).html();
			$(".video-player").html("<p>"+href+"</p>");
			$(this).addClass("cur").siblings().removeClass("cur");
		});
		
		$(this).click(function(){
			var scroll_offset = $(".video-box").offset();
			var txt = $(this).html();
			$("body,html").animate({scrollTop:scroll_offset.top});
			$(".current-player").fadeIn();
			$(".cp-box").html("<p>您当前播放的是："+txt+"</p>").fadeIn();
			$(".current-player").delay(2500).fadeOut();
		});
	});
	$(".video-btn p.v-light").click(function(){
		if($(".lightoff").is(':hidden')){
			$(".lightoff").fadeIn();
			$(".video-player embed").css({"position":"relative","z-index":"501"});
			$(".video-btn p.v-light").css({"position":"absolute","z-index":"501"});
		}else{
			$(".lightoff").fadeOut();
			$(".video-player embed").css({"position":"relative","z-index":"100"});
			$(".video-btn p.v-light").css({"position":"absolute","z-index":"100"});
		}
		if($(".video-btn p.v-light i").hasClass('fa-moon-o')){
			$(".video-btn p.v-light i").removeClass("fa-moon-o");
			$(".video-btn p.v-light i").addClass("fa-sun-o");
		}else{
			$(".video-btn p.v-light i").removeClass("fa-sun-o");
			$(".video-btn p.v-light i").addClass("fa-moon-o");
		}
		var scroll_offset = $(".video-box").offset();
		$("body,html").animate({scrollTop:scroll_offset.top});
		if($(".video-btn p.v-light").attr("title")=="关灯"){
			$(".video-btn p.v-light").attr("title","开灯");
		}else{
			$(".video-btn p.v-light").attr("title","关灯");
		}
	});
	$(".video-btn p.v-comment").click(function(){
		var scroll_offset = $("#gitalk-comment").offset();
		$("body,html").animate({scrollTop:scroll_offset.top});
	});

	
	$(".v-select").click(function(){
		$(".video-playlist p").show();
		var cur_offset = $(".video-playlist p.cur").offset();
		$("body,html").animate({scrollTop:cur_offset.top-75});
		$(".video-more").addClass("v1");
		if($(".video-more").hasClass("v1")){
			$(".video-more .more-box").html("收起");
		}else{
			$(".video-more").removeClass("v1");
			$(".video-more .more-box").html("展开查看更多");
		}
	});

	if($(".video-playlist p").length<=1){
		$(".video-playlist").addClass("hide");
	}else{
		$(".video-playlist").removeClass("hide");
	}
	var vd = $(".video-playlist p").eq(0).html();
	$(".video-playlist p").eq(0).addClass("cur");
	$(".video-player").append("<p>"+vd+"</p>");
	$(".video-playlist").each(function(){
		var list = $(".video-playlist p").length;
		if(list>=3){
			var gt = $(".video-playlist p:gt(4)");
			gt.hide();
		}
		if(list>=5){
			$(".video-playlist").after("<div class='video-more'><div class='more-box'>展开查看更多</div><div class='video-js'><span>"+list+"</span>P</div></div>");
		}
		if(list<2){
			$('.video-more .video-js').remove();
		}
		$(".video-playlist p").eq(0).addClass("cur cl");
		$(".video-playlist p").each(function(){
			var n1 = $(this).index();
			if(n1==0){
				$(this).next().addClass("cl");
				$(this).next().next().addClass("cl");
				$(this).next().next().next().addClass("cl");
				$(this).next().next().next().next().addClass("cl");
			}
			$(this).click(function(){
				$(this).addClass("cur cl").siblings().removeClass("cur cl");
				var num = $(this).index();
				if(num>=0){
					$(this).prev().addClass("cl");
					$(this).prev().prev().addClass("cl");
					$(this).next().addClass("cl");
					$(this).next().next().addClass("cl");
				}else{
					$(this).removeClass("cl");
				}
				if(num==0){
					$(this).next().addClass("cl");
					$(this).next().next().addClass("cl");
					$(this).next().next().next().addClass("cl");
					$(this).next().next().next().next().addClass("cl");
				}
				if(num==1){
					$(this).next().addClass("cl");
					$(this).next().next().addClass("cl");
					$(this).next().next().next().addClass("cl");
				}
				if(num==3){
					$(this).next().addClass("cl");
				}
				if($(this).hasClass("cl")){
					$(".video-playlist p").hide();
					$(".video-playlist p.cl").show();
				}
				$(".video-more .more-box").html("展开查看更多");
			});
		});
		$(".video-more").click(function(){
			if($(".video-playlist p").is(":hidden") || $('.video-playlist.show').length == 1){
				gt.show();
				$(".video-more .more-box").html("收起");
				$(".video-playlist p").show();
			}else{
				gt.hide();
				$(".video-more .more-box").html("展开查看更多");
				if($(".video-playlist p.cl").is(":visible")){
					$(".video-playlist p.cl").show();
				}
				$(".video-playlist p").hide();
				$(".video-playlist p.cl").show();
			}
		});
		if($(".video-playlist p").length>=2){
			$(".v-select").show();
		}
	});
	if($(".video-player embed").length==0){
		$(".video-btn").remove();
	}
	var videoplayp = undefined; 
	if(typeof(videoplayp) == $(".video-player p").html()){
		$(".video-player p").hide();
	}else{
		$(".video-player p").show();
	}
	if($(".video-player p").is(":hidden")){
		$(".video-player").append("<div class='no-player'><img src='https://i.loli.net/2017/08/11/598c878c3fd45.gif' /></div>")
	}else{
		$(".video-player .no-play").remove();
	}
	var videolist = $('.video-playlist p').length;
	if(videolist >5){
		$(".video-more").show();
	}else{
		$(".video-more").hide();
	}
	$('.v-content').each(function(){
		$(this).find('br').after("<p></p>").remove();
		$(this).find('p').eq(0).remove();
	});
})();
