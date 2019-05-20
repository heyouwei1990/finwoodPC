$(function() {
	//发布求购
	$(".buyzone-search .btn-pubbuy").on("click", function() {
		$(".buyzone-dialog").stop().fadeIn();
	})
	$(".buyzone-dialog .close").on("click", function() {
		$(".buyzone-dialog").stop().fadeOut();
	})
	$(".buyzone-dialog .maskbg").on("click", function() {
		$(".buyzone-dialog").stop().fadeOut();
	})
	
	//求购信息
	$(".buyzone-list").on("click",".btn-submit", function() {
		if(!$(this).hasClass("dimed")){
			$(".buyzone-supply").stop().fadeIn();
		}
	})
	$(".buyzone-supply .close").on("click", function() {
		$(".buyzone-supply").stop().fadeOut();
	})
	$(".buyzone-supply .maskbg").on("click", function() {
		$(".buyzone-supply").stop().fadeOut();
	})
	
})