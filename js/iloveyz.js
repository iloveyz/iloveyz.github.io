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
		'{:广告:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/57/2018new_guanggao_thumb.png" class="smile" />',
		'{:doge:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a1/2018new_doge02_org.png" class="smile" />',
		'{:喵喵:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7b/2018new_miaomiao_thumb.png" class="smile" />',
		'{:嘘:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b0/2018new_xu_org.png" class="smile" />',
		'{:坏笑:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4d/2018new_huaixiao_org.png" class="smile" />',
		'{:舔屏:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3e/2018new_tianping_thumb.png" class="smile" />',
		'{:捂脸:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/10/2018new_wu_thumb.png" class="smile" />',
		'{:哈哈:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/2018new_haha_thumb.png" class="smile" />',
		'{:扶眼镜:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/aa/2018new_bingbujiandan_thumb.png" class="smile" />',
		'{:白眼:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ef/2018new_landelini_org.png" class="smile" />',
		'{:黑线:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a3/2018new_heixian_thumb.png" class="smile" />',
		'{:斜眼:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2d/2018new_xiaoerbuyu_org.png" class="smile" />',
		'{:挤眼:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/43/2018new_jiyan_org.png" class="smile" />',
		'{:亲亲:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2c/2018new_qinqin_thumb.png" class="smile" />',
		'{:嘻嘻:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/33/2018new_xixi_thumb.png" class="smile" />',
		'{:害羞:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c1/2018new_haixiu_org.png" class="smile" />',
		'{:疑问:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b8/2018new_ningwen_org.png" class="smile" />',
		'{:阴险:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/2018new_yinxian_org.png" class="smile" />',
		'{:怒骂:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/87/2018new_zhouma_thumb.png" class="smile" />',
		'{:酷:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c4/2018new_ku_org.png" class="smile" />',
		'{:思考:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/30/2018new_sikao_org.png" class="smile" />',
		'{:汗:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/28/2018new_han_org.png" class="smile" />',
		'{:挖鼻:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9a/2018new_wabi_thumb.png" class="smile" />',
		'{:睡:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e2/2018new_shuijiao_thumb.png" class="smile" />',
		'{:good:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8a/2018new_good_org.png" class="smile" />',
		'{:哈欠:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/55/2018new_dahaqian_org.png" class="smile" />',
		'{:哼:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/2018new_heng_thumb.png" class="smile" />',
		'{:闭嘴:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/2018new_bizui_org.png" class="smile" />',
		'{:鼓掌:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_guzhang_thumb.png" class="smile" />',
		'{:馋嘴:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fa/2018new_chanzui_org.png" class="smile" />',
		'{:抓狂:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/17/2018new_zhuakuang_org.png" class="smile" />',
		'{:可爱:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/09/2018new_keai_org.png" class="smile" />',
		'{:爱你:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f6/2018new_aini_org.png" class="smile" />',
		'{:悲伤:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ee/2018new_beishang_org.png" class="smile" />',
		'{:委屈:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/2018new_weiqu_thumb.png" class="smile" />',
		'{:笑哭:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/83/2018new_kuxiao_org.png" class="smile" />',
		'{:吃惊:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/2018new_chijing_org.png" class="smile" />',
		'{:偷笑:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/2018new_touxiao_org.png" class="smile" />',
		'{:可怜:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/2018new_kelian_org.png" class="smile" />',
		'{:失望:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/aa/2018new_shiwang_thumb.png" class="smile" />',
		'{:憧憬:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c9/2018new_chongjing_org.png" class="smile" />',
		'{:吃瓜:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/01/2018new_chigua_thumb.png" class="smile" />',
		'{:打脸:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cb/2018new_dalian_org.png" class="smile" />',
		'{:笑而不语:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2d/2018new_xiaoerbuyu_org.png" class="smile" />',
		'{:太开心:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2018new_taikaixin_org.png" class="smile" />',
		'{:色:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/2018new_huaxin_org.png" class="smile" />',
		'{:微笑:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e3/2018new_weixioa02_org.png" class="smile" />',
		'{:笑cry:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4a/2018new_xiaoku_thumb.png" class="smile" />',
		'{:困:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/2018new_kun_thumb.png" class="smile" />',
		'{:费解:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2a/2018new_wenhao_thumb.png" class="smile" />',
		'{:泪:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_leimu_org.png" class="smile" />',
		'{:鄙视:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/da/2018new_bishi_org.png" class="smile" />',
		'{:傻眼:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/dd/2018new_shayan_org.png" class="smile" />',
		'{:二哈:}':'<img src="https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/22/2018new_erha_org.png" class="smile" />',
	};
	$('.markdown-content a[href*=#]').removeAttr('href');
	$('.toc-level-1,.toc-level-2,.toc-level-3,.toc-level-4,.toc-level-5,.markdown-content br').remove();
	$('.markdown-content h1,.markdown-content h2,.markdown-content h3,.markdown-content h4,.markdown-content h5').removeAttr('id');
	//By ImMmMm.com 20180102
    $('.douban_item').each(function(){
	        var id = $(this).attr('date-dbid').toString();
		  	//console.log(id);
	        if (id.length < 9){
	            var url= "https://api.douban.com/v2/movie/subject/"+id+"?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
	            $.ajax({
	                url: url,
	                type: 'GET',
	                dataType: "jsonp",
	                success: function (data) {
	                    var db_casts = "",db_genres= "";
	                    for(var i in data.casts){
	                        db_casts += data.casts[i].name+" ";
	                    }
	                    for(var i in data.genres){
	                        db_genres += data.genres[i]+" ";
	                    }
	                    var db_star = Math.ceil(data.rating.stars);
	                    $('#db'+id).html("<a target='_blank' href='"+data.alt+"'><div class='post-preview--meta'><div class='post-preview--middle'><div class='post-preview-top'><h2 class='post-preview--name'>"+data.title+"<span>（"+data.year+"）</span></h2><div class='rating'><div class='rating-star allstar"+db_star+"'></div><div class='rating-average'>"+data.rating.average.toFixed(1)+"</div></div></div><div class='post-preview--infor'><div class='post-preview--date'>导演："+data.directors[0].name+" / 主演："+db_casts+" / 类型："+db_genres+"</div></div><section class='post-preview--excerpt'>"+data.summary+"</section></div></div><div class='post-preview--image' style='background-image:url("+data.images.large+");'></div></a>");
	                },
	                error: function(error) {
	                    var url= "https://api.douban.com/v2/movie/"+id
			            $.ajax({
			                url: url,
			                type: 'GET',
			                dataType: "jsonp",
			                success: function (data) {
			                    var db_author = "",db_casts = "",db_genres= "",db_director = "",db_actor = "";
			                    for(var i in data.author){
			                        db_author += data.author[i].name;
			                        db_director += "<i>"+data.author[i].name.split(' ')[0]+"</i>";
			                    }
			                    for(var i in data.attrs.cast){
			                        // db_casts += "<i>"+data.attrs.cast[i]+"</i>";
			                        db_casts += data.attrs.cast[i];
			                        db_actor += "<i>"+data.attrs.cast[i].split(' ')[0]+"</i>";
			                    }

			                    for(var i in data.attrs.movie_type){
			                        db_genres += data.attrs.movie_type[i]+" ";
			                    }

			                    var db_star = Math.ceil(data.rating.average);
			                    var db_alt = data.alt;
			                    var db_href = db_alt.replace(/\/movie\//g,'/subject/');
			                    $('#db'+id).html("<a target='_blank' href='"+db_href+"'><div class='post-preview--meta'><div class='post-preview--middle'><div class='post-preview-top'><h2 class='post-preview--name'>"+data.alt_title+"<span>（"+data.attrs.year+"）</span></h2><div class='rating'><div class='rating-star allstar"+db_star+"'></div><div class='rating-average'>"+data.rating.average+"</div></div></div><div class='post-preview--infor'><div class='post-preview--date'>导演：<span class='rating-director'>"+db_director+"</span> / 主演：<span class='rating-actor'>"+db_actor+"</span> / 类型："+db_genres+"</div></div><section class='post-preview--excerpt'>"+data.summary+"</section></div></div><div class='post-preview--image' style='background-image:url("+data.image+");'></div></a>");
			                    if($('.post-preview--date span i').length > 6){
			                    	$('.post-preview--date span i:gt(5)').remove();
			                    }
			                }
	                	})
	                }
	            });
	        }else if (id.length > 9){
	            var url= "https://api.douban.com/v2/book/isbn/"+id+"?fields=alt,title,subtitle,rating,author,publisher,pubdate,summary,images&apikey=0dad551ec0f84ed02907ff5c42e8ec70";
	            $.ajax({
	                url: url,
	                type: 'GET',
	                dataType: 'JSONP',
	                success: function (data) {
	                    var db_star = Math.ceil(data.rating.stars);
	                    $('#db'+id).html("<a target='_blank' href='"+data.alt+"'><div class='post-preview--meta'><div class='post-preview--middle'><div class='post-preview-top'><h2 class='post-preview--name'>《"+data.title+"》"+data.subtitle+"</h2><div class='rating'><div class='rating-star allstar"+db_star+"'></div><div class='rating-average'>"+data.rating.average+"</div></div></div><div class='post-preview--infor'><div class='post-preview--date'>作者："+data.author[0]+" / 出版社："+data.publisher+" / 出版年："+data.pubdate+"</div></div><section class='post-preview--excerpt'>"+data.summary+"</section></div></div><div class='post-preview--image' style='background-image:url("+data.images.large+");'></div></a>");
	                }
	            });
	        }else{
	            console.log("出错"+ id)
	        }
	    });
	if($('.markdown-content').length >= 1){
		var reg = /\{:.+?\:}/g;
		var str = $('.markdown-content').html();
		str = str.replace(reg,function(a,b){ 
			return face[a];
		});
		$('.markdown-content').html(str);
	}
	
	$('.la-title ol li  a[href*=#]').click(function() {
		var decode = decodeURI(this.hash);
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(decode);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top - 145;
				$('html,body').animate({
					scrollTop: targetOffset
				},1000);
				return false;
			}
		}
	});
	/* var decode = decodeURI(this.hash);
		var tocposition = $(this).position().top;
		var tocheight = $(this).outerHeight();
		var tocindex = $(this).index();
		var tocsum = parseInt((tocheight + tocheight)*tocindex - tocheight);
		console.log(tocposition);
		$('.toc-article').scrollTop(tocposition); */
	if($('.app-long--article').length == 1){
		$('.la-title ol li').eq(0).addClass('cur');
		document.addEventListener('scroll', function () {
		  var topoffset = $('.la-sidebar').offset().top;
		  var sidebarheight = $('.la-sidebar').height();
		  var liketop = $('.post-like').offset().top;
		  var bannerlength = $('.la-banner').length;
		  var laheight = $('.app-long--article').height();
		  var laTop = $('.la-wrapper').offset().top;
		  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		  var offsetop = $('.la-content').offset().top;

		  if(scrollTop >= offsetop){
			  $('.la-sidebar').removeClass('is-stop-bottom');
			  $('.la-sidebar').removeClass('is-stop-top');
			  $('.la-sidebar').addClass('fixed');
			  $('.la-content .la-item--content').each(function(){
				  var topindex = $(this).index();
				  var toc = $('#toc ol li').eq(topindex);
				  var cur = $('#toc ol li.cur').eq(topindex);
				  var topset = $(this).offset().top - 145;
				  if(scrollTop >= topset){
					 $('.la-title ol li').eq(topindex).addClass('cur').siblings().removeClass('cur');
				  }
				  $('#toc ol li.cur').each(function(){
					var h = parseInt($(this).outerHeight())-20;
					var toch = $('#toc').outerHeight();
					var index = $(this).index();
					var top = $(this).offset().top;
					var toctop = $('#toc').offset().top;
					for(var i = 0; i < index; i++){
						if(i == 0){
							h = 0;
						}else{
							h+= parseInt($('#toc ol li').eq(i).outerHeight());
						}
						$('#toc').stop().animate({scrollTop:h});
					}
				  });
			  });
		  }else{
			  $('.la-sidebar').removeClass('fixed');
			  if(bannerlength < 1){
				$('.la-sidebar').css({'top':offsetop+'px'});
			  }
			  $('.la-sidebar').addClass('is-stop-top');
		  }
		  
		  if(bannerlength == 1){
			  var mainheight = parseInt(laheight - sidebarheight) - 75;
		  }else{
			  var mainheight = parseInt(laheight - sidebarheight) - 75;
		  }
		  if(scrollTop >= mainheight){
			  $('.la-sidebar').removeClass('fixed');
			  $('.la-sidebar').removeAttr('style');
			  $('.la-sidebar').addClass('is-stop-bottom');
		  }
		});
		var wrapperheight = $('.app-long--article').height();
		$(window).resize(function() {
			if($(window).height()<wrapperheight && $('.ins-search.show').length === 1){
				$('.app-long--article').hide();
			}
			if($(window).height()>=wrapperheight){
				$('.app-long--article').show();
			}
		});
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var offsetop = $('.la-content').offset().top;
		if($('.no-banner').length == 1){
			$('.la-sidebar').removeClass('is-stop-top');
			$('.la-sidebar').addClass('fixed');
			$('.la-sidebar').css({'top':offsetop+'px'});
		}
		if(scrollTop >= 425){
			$('.la-sidebar').removeClass('is-stop-top');
			$('.la-sidebar').addClass('fixed');
			$('.la-content .la-item--content').each(function(){
				var topindex = $(this).index();
				var topset = $(this).offset().top - 145;
				if(scrollTop >= topset){
					$('.la-title ol li').eq(topindex).addClass('cur').siblings().removeClass('cur');
				}
			});
		}else{
			$('.la-sidebar').removeClass('fixed');
			$('.la-sidebar').addClass('is-stop-top');  
		}
		/* var currentOffset = $('.toc-item').offset().top +$('.toc-article').outerHeight(false);
		var nextBottom = $(div内的对应链接).offset().top + $(div内的对应链接).outerHeight(false);
		var nextOffset = $(div).scrollTop() + nextBottom - currentOffset;
		if (nextBottom>currentOffset) {
			$(div).scrollTop(nextOffset);
		}else {
			$(div).scrollTop(0);
		} */
	}
	
	$('.la-mobile-content .la-item--content').click(function(){
		var itemIndex = $(this).index();
		$('.la-content').removeClass('is-mobile-hide');
		$('.la-content .swiper-container').removeClass('swiper-no-swiping');

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