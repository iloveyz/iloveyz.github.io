var bszCaller,bszTag;!function(){var c,d,e,a=!1,b=[];ready=function(c){return a||"interactive"===document.readyState||"complete"===document.readyState?c.call(document):b.push(function(){return c.call(this)}),this},d=function(){for(var a=0,c=b.length;c>a;a++)b[a].apply(document);b=[]},e=function(){a||(a=!0,d.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",e,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",e),window==window.top&&(clearInterval(c),c=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",e,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){/loaded|complete/.test(document.readyState)&&e()}),window==window.top&&(c=setInterval(function(){try{a||document.documentElement.doScroll("left")}catch(b){return}e()},5)))}(),bszCaller={fetch:function(a,b){var c="BusuanziCallback_"+Math.floor(1099511627776*Math.random());window[c]=this.evalCall(b),a=a.replace("=BusuanziCallback","="+c),scriptTag=document.createElement("SCRIPT"),scriptTag.type="text/javascript",scriptTag.defer=!0,scriptTag.src=a,document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)},evalCall:function(a){return function(b){ready(function(){try{a(b),scriptTag.parentElement.removeChild(scriptTag)}catch(c){bszTag.hides()}})}}},bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",function(a){bszTag.texts(a),bszTag.shows()}),bszTag={bszs:["site_pv","page_pv","site_uv"],texts:function(a){this.bszs.map(function(b){var c=document.getElementById("busuanzi_value_"+b);c&&(c.innerHTML=a[b])})},hides:function(){this.bszs.map(function(a){var b=document.getElementById("busuanzi_container_"+a);b&&(b.style.display="none")})},shows:function(){this.bszs.map(function(a){var b=document.getElementById("busuanzi_container_"+a);b&&(b.style.display="inline")})}};
(function(){
	$('.meta-date').liveTimeAgo({
		translate: {
			'year': '% 年前',
			'years': '% 年前',
			'month':'% 个月前',
			'months':'% 个月前',
			'day': '% 天前',
			'days': '% 天前',
			'hour': '% 小时前',
			'hours': '% 小时前',
			'minute': '% 分钟前',
			'minutes': '% 分钟前',
			'seconds': '% 秒钟前',
			'error': '未知的时间',
		}
	});
	$('.article-card').find('.leancloud-visitors-count').each(function(){
		if($(this).text() == ''){
			$(this).text(0);
		}
	});
	if($('.header-top').is(':hidden')){
		$('.mobile--video-box .more-box').click(function(){
			if(!$('.mobile--video-box.video-playlist').attr('style')){
				$('.mobile--video-box .video-playlist').css({
					'overflow-x': 'hidden',
					'white-space': 'normal',
					'height': 'auto'
				});
				$('.mobile--video-box .video-playlist').addClass('show');
			}else{
				$('.mobile--video-box .video-playlist').removeAttr('style');
				$('.mobile--video-box .video-playlist').removeClass('show');
			}
		});
	}else{
		$('.mobile--video-box .video-js').remove();
	}
	$('.mobile--video-box .video-playlist p').click(function(){
		$('.mobile--video-box .video-box .current-player .cp-box').addClass('cur--click');
		setTimeout(function(){$('.mobile--video-box .video-box .current-player .cp-box').removeClass('cur--click');},3000);
	});
	var vpContent = $('.mobile--video-box .entry-description p').height();
	$('.mobile--video-box .entry-description i').click(function(){
		if(!$('.mobile--video-box .entry-description .d-content').attr('style')){
			$('.mobile--video-box .entry-description .d-content').css('height',vpContent);
			$('.mobile--video-box .entry-description i').removeClass('fa-angle-up');
			$('.mobile--video-box .entry-description i').addClass('fa-angle-down');
		}else{
			$('.mobile--video-box .entry-description .d-content').removeAttr('style');
			$('.mobile--video-box .entry-description i').removeClass('fa-angle-down');
			$('.mobile--video-box .entry-description i').addClass('fa-angle-up');
		}
	});
})();