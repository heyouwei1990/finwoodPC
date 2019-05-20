$(function() {
	//图片放大镜
	$(".jqzoom").imagezoom();
	$('.pic-nav li').mousemove(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".jqzoom").attr('src',$(this).find('img').attr('big'));
		$(".jqzoom").attr('rel',$(this).find('img').attr('big'));
	});

	
	//更多
	var li = $(".malldetail-cont .td-warp").find("li");
	var offH = $(".malldetail-cont .td-warp").height();
	$(".malldetail-cont .btn-more").on("click", function() {
		if( $(".malldetail-cont .td-warp").height() == offH) {
			$(".malldetail-cont .td-warp").animate({
				"height": (li.length * li[0].offsetHeight) + "px"
			});
		} else {
			$(".malldetail-cont .td-warp").animate({
				"height": offH + "px"
			});
		}
	})
})