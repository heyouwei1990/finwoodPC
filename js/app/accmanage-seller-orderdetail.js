$(function() {
	//顶部tab栏切换
	$('.tab-hd li').on('click',function(index){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$('.accmanage-orderdetail .tab-bd').eq(index).removeClass('hide').siblings('.tab-bd').addClass('hide')
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