$(document).ready(function(){
	$('.btn-more').click(function(){
		if($(this).text()=='更多'){
			$('.record-table').find('.tr-hide').show();
			$(this).text('收起');
		}else{
			$('.record-table').find('.tr-hide').hide();
			$(this).text('更多');
		}
	})
	$('.btn-enchashment').click(function(){
		var html ='<div class="enchashment-confirm">'
			html+='<dl><dt>提现账号</dt><dd>6225 **** **** **** 897</dd></dl>'
			html+='<dl><dt>可提现金额</dt><dd>888888.00 元</dd></dl>'
			html+='<dl><dt>可提现金额</dt><dd>'
			html+='<input type="text" placeholder="请输入提现金额" />'
			html+='<span>元</span><p class="warn"><i></i>提现超额</p></dd></dl>'
			html+='<p class="tip-gray">友情提示：T+0提现，以银行实际到账时间为准</p></div>';
		
		wood.confirm({
			msg:html,
			ensure:'确认申请',
			isOne:true,
			width:460,
			height:320
		})
	})
})
