$(function() {
	//上传地址在标签data-url上
	$('#fileupload').fileupload({
		dataType: 'json',
		done: function(e, data) {
			/*$.each(data.result.files, function(index, file) {
				$('<p/>').text(file.name).appendTo(document.body);
			});*/
		}
	});
	
	//线下支付弹窗
	$(".order-ious .btn-submit").on("click", function() {
		if($("input[name='bank']:checked").val() == 1001){
			$(".order-paydialog").stop().fadeIn();
		}
		else{
			location.href = "page-8-订单支付成功.html";
		}
	})
	$(".order-paydialog .close").on("click", function() {
		$(".order-paydialog").stop().fadeOut();
	})
	$(".order-paydialog .maskbg").on("click", function() {
		$(".order-paydialog").stop().fadeOut();
	})
	
	//企业支付还是个人支付选择
	$('.pay-tab-hd>span').click(function(){
		var index=$(this).index()
		$(this).addClass('on').siblings().removeClass('on');
		$('.pay-tab-bd').eq(index).addClass('on').siblings().removeClass('on');
	})
	
	
})