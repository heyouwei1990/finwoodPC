$(function() {
	//添加地址
	$("#btn-setaddr").on("click", function() {
		$(".dialog-setaddr").stop().fadeIn();
	})
	$(".dialog-setaddr .close,.dialog-setaddr .btn-green,.dialog-setaddr .maskbg").on("click", function() {
		$(".dialog-setaddr").stop().fadeOut();
	})
	
})