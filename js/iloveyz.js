(function(){
	$('.mobile--view-p, .view-p').find('.leancloud-visitors-count').each(function(){
		if($(this).text() == ''){
			$(this).text(0);
		}
	});
	$('.post-like, .like-p').find('.like-count').each(function(){
		if($(this).text() == ''){
			$(this).text(0);
		}
	});
	var face ={
		'{:广告:}':'<img src="https://i.loli.net/2017/09/16/59bce6cae0dbb.gif" class="smile" />',
		'{:doge:}':'<img src="https://i.loli.net/2017/09/16/59bce7021a70d.gif" class="smile" />',
		'{:喵喵:}':'<img src="https://i.loli.net/2017/09/16/59bce7222c36d.gif" class="smile" />',
		'{:嘘:}':'<img src="https://i.loli.net/2017/09/21/59c379cce61c5.gif" class="smile" />',
		'{:坏笑:}':'<img src="https://i.loli.net/2017/09/16/59bce7f5351ff.png" class="smile" />',
		'{:舔屏:}':'<img src="https://i.loli.net/2017/09/16/59bce8106b621.png" class="smile" />',
		'{:捂脸:}':'<img src="https://i.loli.net/2017/09/16/59bce85a557b7.png" class="smile" />',
		'{:哈哈:}':'<img src="https://i.loli.net/2017/09/08/59b2a5d821b61.gif" class="smile" />',
		'{:扶眼镜:}':'<img src="https://i.loli.net/2017/09/16/59bce93b606e1.png" class="smile" />',
		'{:猪:}':'<img src="https://ooo.0o0.ooo/2017/09/08/59b2a6a2069ea.gif" class="smile" />',
		'{:黑线:}':'<img src="https://i.loli.net/2017/09/08/59b2a6db1e752.gif" class="smile" />',
		'{:再见:}':'<img src="https://i.loli.net/2017/09/08/59b2a65270de0.gif" class="smile" />',
		'{:问号:}':'<img src="https://i.loli.net/2017/09/08/59b2a789e0688.png" class="smile" />',
		'{:斜眼:}':'<img src="https://i.loli.net/2017/09/08/59b2a79e8cfd7.png" class="smile" />',
		'{:挤眼:}':'<img src="https://i.loli.net/2017/09/21/59c3795dd51bf.gif" class="smile" />',
		'{:亲亲:}':'<img src="https://i.loli.net/2017/09/08/59b2a7f9d8e50.gif" class="smile" />',
		'{:嘻嘻:}':'<img src="https://i.loli.net/2017/09/08/59b2a81965d50.gif" class="smile" />',
		'{:害羞:}':'<img src="https://ooo.0o0.ooo/2017/09/21/59c386667ec97.gif" class="smile" />',
		'{:疑问:}':'<img src="https://i.loli.net/2017/09/08/59b2a89e2b927.gif" class="smile" />',
		'{:阴险:}':'<img src="https://i.loli.net/2017/09/08/59b2a87713650.gif" class="smile" />',
		'{:怒骂:}':'<img src="https://i.loli.net/2017/09/16/59bce9706e236.gif" class="smile" />',
		'{:酷:}':'<img src="https://i.loli.net/2017/09/16/59bce9ab9b632.png" class="smile" />',
		'{:思考:}':'<img src="https://i.loli.net/2017/09/16/59bcea0d2d5b9.gif" class="smile" />',
		'{:汗:}':'<img src="https://i.loli.net/2017/09/21/59c377a580b8b.gif" class="smile" />',
		'{:挖鼻:}':'<img src="https://i.loli.net/2017/09/16/59bceaa39e76c.gif" class="smile" />',
		'{:睡:}':'<img src="https://i.loli.net/2017/09/16/59bceb8b6221b.gif" class="smile" />',
		'{:good:}':'<img src="https://i.loli.net/2017/09/16/59bcec175a2d3.gif" class="smile" />',
		'{:哈欠:}':'<img src="https://i.loli.net/2017/09/21/59c376b2a0b53.gif" class="smile" />',
		'{:哼:}':'<img src="https://i.loli.net/2017/09/21/59c37738f3d3f.gif" class="smile" />',
		'{:ok:}':'<img src="https://i.loli.net/2017/09/16/59bcecbbe0296.gif" class="smile" />',
		'{:囧:}':'<img src="https://i.loli.net/2017/09/16/59bcecd5d1310.gif" class="smile" />',
		'{:闭嘴:}':'<img src="https://i.loli.net/2017/09/16/59bcee02ba5bf.gif" class="smile" />',
		'{:鼓掌:}':'<img src="https://i.loli.net/2017/09/16/59bcee2fd761d.gif" class="smile" />',
		'{:馋嘴:}':'<img src="https://ooo.0o0.ooo/2017/09/21/59c387618907d.gif" class="smile" />',
		'{:抓狂:}':'<img src="https://ooo.0o0.ooo/2017/09/21/59c3850cd623c.gif" class="smile" />',
		'{:高兴:}':'<img src="https://ooo.0o0.ooo/2017/09/21/59c385feed722.gif" class="smile" />',
		'{:可爱:}':'<img src="https://i.loli.net/2017/09/08/59b2a8679a928.gif" class="smile" />'
	};
	if($('.markdown-content').length >= 1){
		var reg = /\{:.+?\:}/g;
		var str = $('.markdown-content').html();
		str = str.replace(reg,function(a,b){ 
			return face[a];
		});
		$('.markdown-content').html(str);
	}
	$('.la-title ol li  a[href*=#]').click(function() {
		//$(this).parents('li').addClass('cur').siblings().removeClass('cur');
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
		var $target = $(this.hash);  
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');  
		if ($target.length) {  
		  var targetOffset = $target.offset().top;
		  var curposition = parseInt(targetOffset - 171);
		  $('html,body').animate({  
			scrollTop: targetOffset - 145
		  },1000);  
		  return false;  
		}  
	  }
	});
	if($('.app-long--article').length == 1){
		document.addEventListener('scroll', function () {
		  var topoffset = $('.la-sidebar').offset().top;
		  var sidebarheight = $('.la-sidebar').height();
		  var liketop = $('.post-like').offset().top;
		  var bannerlength = $('.la-banner').length;
		  var laheight = $('.app-long--article').height();
		  var laTop = $('.la-wrapper').offset().top;
		  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		  if(scrollTop >= 425 && bannerlength == 1){
			  $('.la-sidebar').removeClass('is-stop-bottom');
			  $('.la-sidebar').removeClass('is-stop-top');
			  $('.la-sidebar').addClass('fixed');
		  }else{
			  $('.la-sidebar').removeClass('fixed');
			  $('.la-sidebar').addClass('is-stop-top');
		  }
		  
		  if(bannerlength == 1){
			  var mainheight = parseInt(laheight - sidebarheight) - 75;
		  }
		  if(scrollTop >= mainheight){
			  $('.la-sidebar').removeClass('fixed');
			  $('.la-sidebar').addClass('is-stop-bottom');
		  }
		  $('.la-content .la-item--content').each(function(){
			  var topindex = $(this).index();
			  var topset = $(this).offset().top - 145;
			  if(scrollTop >= topset){
				$('.la-title ol li').eq(topindex).addClass('cur').siblings().removeClass('cur');
			  }
		  });
		});
		var wrapperheight = $('.app-long--article').height();
		$('.app-long--article').css({'height': wrapperheight+'px'});
	}
	$('.la-mobile-content .la-item--content').click(function(){
		var itemIndex = $(this).index();
		$('.la-content').removeClass('is-mobile-hide');
		$('header').hide();
		$('.la-content .la-item--content').eq(itemIndex).addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active');
		if(itemIndex == 0){
			var curwidth = parseInt($(window).width() - $(window).width());
			$('.la-content .swiper-wrapper').css({'transform': 'translate3d('+curwidth+'px, 0px, 0px)', 'transition-duration': '0ms'});
		}
		if(itemIndex >= 1){
			var curwidth = parseInt($(window).width() - $(window).width() * (itemIndex + 1));
			$('.la-content .swiper-wrapper').css({'transform': 'translate3d('+curwidth+'px, 0px, 0px)', 'transition-duration': '0ms'});
		}
	});
	$('.la-content .close').click(function(){
		$('.la-content').addClass('is-mobile-hide');
		$('header').show();
		$('.la-content .la-item--content').removeClass('is-show');
		$('.la-mobile-content .la-item--content').each(function(){
			var moveIndex = $(this).index()+1;
			var itemWidth = $('.la-mobile-content .la-item--content');
			var itemNum = parseInt($('.la-content .swiper-pagination-bullet-active').text());
		});
	});
})();