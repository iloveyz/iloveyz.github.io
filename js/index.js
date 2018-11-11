/* var ias = $.ias({
  container: ".app-body", //包含所有文章的元素
  item: ".article-card", //文章元素
  pagination: ".guide-pager", //分页元素
  next: ".guide-pager a.nextpage", //下一页元素
}); */

/* ias.extension(new IASTriggerExtension({
		text: 'Load more items', //此选项为需要点击时的文字
		offset: 0, //设置此项后，到 offset+1 页之后需要手动点击才能加载，取消此项则一直为无限加载
	})); */
ias.extension(new IASSpinnerExtension());
ias.extension(new IASNoneLeftExtension({
  text: '已加载到最后', // 加载完成时的提示
}));

ias.on('render', function(data, items) {
	$.getScript("https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js", function(data,status,jqxhr){
	  	AV.initialize("GM9SIwrOcd1dWuY21JsjQQsj-gzGzoHsz", "xqyvopE9x4lEQCqaSvz0SWze");
		function showLike(Counter) {
	      var query = new AV.Query(Counter);
	      var entries = [];
	      var $like = $(".like-content");
	      var $visitors = $(".leancloud_visitors");

	      $like.each(function () {
	        entries.push( $(this).attr("id").trim() );
	      });

	      query.containedIn('url', entries);
	      query.find()
	        .done(function (results) {
	          var COUNT_CONTAINER_REF = '.like-count';
	          var VIEW_CONTAINER_COUNT = '.leancloud-visitors-count';
	          if (results.length === 0) {
	            $like.find(COUNT_CONTAINER_REF).text(0);
	            $visitors.find(VIEW_CONTAINER_COUNT).text(0);
	            return;
	          }

	          for (var i = 0; i < results.length; i++) {
	            var item = results[i];
	            var url = item.get('url');
	            var like = item.get('like');
	            var time = item.get('time');
	            var element = document.getElementById(url);

	            $(element).find(COUNT_CONTAINER_REF).text(like);
				$(element).parents('.like-p').prev('.view-p').find(VIEW_CONTAINER_COUNT).text(time);
				
				if($('.app-long--article').length == 1){
					$(element).parents('.app-long--article').next('.la-footer').find(COUNT_CONTAINER_REF).text(like);
					$(element).parents('.post-like').parents('.la-footer').prev('.app-long--article').find(VIEW_CONTAINER_COUNT).text(time);
					$(element).parents('.post-like').parents('.la-content').prev('.la-sidebar').find(VIEW_CONTAINER_COUNT).text(time);
				}else{
					$(element).parents('.post-like').parents('.article-entry').prev('.app-header').find(VIEW_CONTAINER_COUNT).text(time);
				}
	          }
	        })
	        .fail(function (object, error) {
	          console.log("Error: " + error.code + " " + error.message);
	        });
	    }

	    function addLike(Counter) {
	      var $like = $(".like-content");
	      var url = $like.attr('id').trim();
	      var title = $like.attr('data-flag-title').trim();
	      var query = new AV.Query(Counter);
	      query.equalTo("url", url);
	      query.find({
	        success: function(results) {
	          if (results.length > 0) {
	            var counter = results[0];
	            counter.fetchWhenSave(true);
	            counter.increment("like");
	            counter.save(null, {
	              success: function(counter) {
	                var $element = $(document.getElementById(url));
	                $element.find('.like-count').text(counter.get('like'));
	              },
	              error: function(counter, error) {
	                console.log('Failed to save Visitor num, with error message: ' + error.message);
	              }
	            });
	          } else {
	            var newcounter = new Counter();
	            /* Set ACL */
	            var acl = new AV.ACL();
	            acl.setPublicReadAccess(true);
	            acl.setPublicWriteAccess(true);
	            newcounter.setACL(acl);
	            /* End Set ACL */
	            newcounter.set("title", title);
	            newcounter.set("url", url);
	            newcounter.set("like", 1);
	            newcounter.save(null, {
	              success: function(newcounter) {
	                var $element = $(document.getElementById(url));
	                $element.find('.like-count').text(newcounter.get('like'));
	              },
	              error: function(newcounter, error) {
	                console.log('Failed to create');
	              }
	            });
	          }
	        },
	        error: function(error) {
	          console.log('Error:' + error.code + " " + error.message);
	        }
	      });
	    }
		
		function addCount(Counter) {
	      var $like = $(".like-content");
	      var url = $like.attr('id').trim();
	      var title = $like.attr('data-flag-title').trim();
	      var query = new AV.Query(Counter);
	      query.equalTo("url", url);
	      query.find({
	        success: function(results) {
	          if (results.length > 0) {
	            var counter = results[0];
	            counter.fetchWhenSave(true);
	            counter.increment("time");
	            counter.save(null, {
	              success: function(counter) {
	                var $element = $(document.getElementById(url));
	                $element.parents('.like-p').prev('.view-p').find('.leancloud-visitors-count').text(counter.get('time'));
	                $element.parents('.post-like').parents('.article-entry').prev('.app-header').find('.leancloud-visitors-count').text(counter.get('time'));
	              },
	              error: function(counter, error) {
	                console.log('Failed to save Visitor num, with error message: ' + error.message);
	              }
	            });
	          } else {
	            var newcounter = new Counter();
	            /* Set ACL */
	            var acl = new AV.ACL();
	            acl.setPublicReadAccess(true);
	            acl.setPublicWriteAccess(true);
	            newcounter.setACL(acl);
	            /* End Set ACL */
	            newcounter.set("title", title);
	            newcounter.set("url", url);
	            newcounter.set("time", 1);
	            newcounter.save(null, {
	              success: function(newcounter) {
	                var $element = $(document.getElementById(url));
	                $element.parents('.like-p').prev('.view-p').find('.leancloud-visitors-count').text(newcounter.get('time'));
	                $element.parents('.post-like').parents('.article-entry').prev('.app-header').find('.leancloud-visitors-count').text(newcounter.get('time'));
	              },
	              error: function(newcounter, error) {
	                console.log('Failed to create');
	              }
	            });
	          }
	        },
	        error: function(error) {
	          console.log('Error:' + error.code + " " + error.message);
	        }
	      });
	    }

	    $(function() {
			/*var viewCounter = AV.Object.extend("Counter");
			if ($('.leancloud_visitors').length == 1) {
				addLike(postLike);
			} else if ($('.post-title-link').length > 1) {
				showLike(postLike);
			}*/
			var postLike = AV.Object.extend("Counter");
			showLike(postLike);
			if ($('.leancloud_visitors').length == 1) {
				addCount(postLike);
			} else if ($('.post-title-link').length > 1) {
				showLike(postLike);
			}
	    });
	});
	$.getScript("/js/jquery.liveTimeAgo.js", function(data, status, jqxhr) {});
});