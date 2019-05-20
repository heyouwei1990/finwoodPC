$(function(){
	$('#orderStatus').on('click','li',function(){
		$('#orderStatus').find('li').removeClass('active');
		$(this).addClass('active');
	})
	
	//是否删除订单
	$(".deletOrder").on("click", function() {
		wood.confirm({
			msg:'确认取消该订单？',
			isOne:true
		})
	})
	
	//添加发货信息
	$(".shipments").on("click", function() {
		$(".dialog-setaddr").stop().fadeIn();
	})
	$(".dialog-setaddr .close,.dialog-setaddr .btn-green,.dialog-setaddr .maskbg").on("click", function() {
		$(".dialog-setaddr").stop().fadeOut();
	})
	
	//修改数量
	$(".editNum").on("click", function() {
		wood.confirm({
			msg:'<dl><dt>数量：</dt><dd><input type="text" value="" /><p class="warn"><i></i>格式错误</p></dd></dl>',
			isOne:true
		})
	})
	
	//修改价格
	$(".editPri").on("click", function() {
		wood.confirm({
			msg:'<dl><dt>价格：</dt><dd><input type="text" value="" /><p class="warn"><i></i>格式错误</p></dd></dl>',
			isOne:true
		})
	})
	
})
