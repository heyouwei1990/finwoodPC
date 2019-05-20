$(function() {
	//立即申请
	$(".fina-wrapper .btn-apply").on("click", function() {
		var selcted=$(this).attr('data-selected');
		if(selcted && selcted!='-1'){
			$("#creditName").val(selcted).prop('disabled',true);
		}
		$(".dialog-apply").stop().fadeIn();
	})
	$(".dialog-apply .close,.dialog-apply .maskbg").on("click", function() {
		$("#creditName").prop('disabled',false).val('-1');
		$(".dialog-apply").stop().fadeOut();
	})
	
	//判断表单元素是否为空
	$('.dialog-apply .btn-orange').click(function(){
		//输入框填写
		$('.dialog-apply input').each(function(){
			if ($(this).val()=='') {
				var txt=$(this).parent('dd').siblings('dt').text();
				var lab=label_txt(txt);
				if ($(this).siblings('.warn').length==0) {
					$(this).after('<p class="warn"><i></i>'+lab+'不能为空</p>');
					$(this).siblings('.warn').show();
				}else{
					$(this).siblings('.warn').html('<i></i>'+lab+'不能为空').show();
				}
				
			}
		})
		//贷款种类选择
		if ($('.dialog-apply select').val()=='-1') {
			$('.dialog-apply select').after('<p class="warn"><i></i>请选择贷款种类</p>');
			$('.dialog-apply select').siblings('.warn').show();
		}
		$('input[name=money]').each(function(){
			var count=$(this).val();
			if (count != '') {
				if (!checkMoney(count)) {
					if ($(this).siblings('.warn').length==0) {
						$(this).after('<p class="warn"><i></i>请输入正整数</p>');
						$(this).siblings('.warn').show();
					} else{
						$(this).siblings('.warn').html('<i></i>请输入正整数').show();
					}
				} else{
					$(this).siblings('.warn').remove();
				}
					
				
			}
		})
		$('input[name=tel]').each(function(){
			var count=$(this).val();
			if (count != '') {
				if (!checkTel(count)) {
					if ($(this).siblings('.tip').length==0) {
						$(this).after('<p class="tip"><i></i>请输入正确的号码</p>');
					} else{
						$(this).siblings('.tip').html('<i></i>请输入正确的号码')
					}
				}else{
					$(this).siblings('.tip').remove();
				}
				
			}
		})
		
			
	})
	
})

//正整数验证
function checkMoney(str){
	var reg=/^\+?[1-9][0-9]*$/;
	return reg.test(str);
}

//电话或手机验证
function checkTel(str){
	var reg=/((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
	return reg.test(str);
}

//截取表单label
function label_txt(str){
	//如果有冒号，删除冒号
	if (str.indexOf('：')!=-1) {
		str=str.slice(0,-1) 
	}
	//如果有*，删除*
	if (str.indexOf('*')!=-1) {
		str=str.substring(1)
	}
	return str;
}
