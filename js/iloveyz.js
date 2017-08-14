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
	$('.mobile--view-p, .view-p').find('.leancloud-visitors-count').each(function(){
		if($(this).text() == ''){
			$(this).text(0);
		}
	});
})();