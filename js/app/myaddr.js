$(function() {
	//添加地址
	$(".btn-addmyaddr,.btn-edit-myaddr").on("click", function() {
		$(".dialog-addmyaddr").stop().fadeIn();
	})
	$(".dialog-addmyaddr .close,.dialog-addmyaddr .maskbg").on("click", function() {
		$(".dialog-addmyaddr").stop().fadeOut();
	})
	
	//删除地址确认
	$(".deletBtn").on("click", function() {
		wood.confirm({
			msg:'确认删除这条地址'
		})
	})
})