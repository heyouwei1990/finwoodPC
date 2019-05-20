$(function(){
	//点击输入框
	$('.search-car input').focus(function(){
		//关闭所有选框 
		$('.choose-wrapper').hide();
		//打开我的同级选框，并且回到城市选择
		$(this).siblings('.choose-wrapper').slideDown(300).find('.choose-area').remove();
		$(this).siblings('.choose-wrapper').find('.choose-cont').show();
		//显示城市选择的第一个tab
		$(this).parents('.choose-wrapper').find('.choose-hd li').eq(0).addClass('on').siblings().removeClass('on');
		$(this).parents('.choose-wrapper').find('.choose-bd').eq(0).addClass('on').siblings().removeClass('on');
	})
	
	//关闭
	$(document).click(function(e){
		//如果点击区域非弹框本身或者输入框，就关闭选框
		if ($(e.target).closest('.choose-wrapper').length==0 && !$(e.target).is('input')) {
			$('.choose-wrapper').slideUp(300);
		}
	})
	
	//切换城市选择
	$('.choose-hd li').click(function(){
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parents('.choose-wrapper').find('.choose-bd').eq(index).addClass('on').siblings().removeClass('on');
	})
	
	//选中城市
	$('.choose-city dd').click(function(){
		var city=$(this).text();
		$(this).parents('.choose-cont').hide();
		//点击城市后，即添加其所属区县
		if ($(this).parents('.choose-wrapper').find('.checked-box').length==0) {
			var html = '<div class="choose-area">'
				html+=		'<div class="checked-box">'
				html+=			'<div class="checked-item">'
				html+=				city+'<i>X</i>'
				html+=			'</div>'
				html+=		'</div>'
				html+=		'<div class="choose-county">'
				html+=		'</div>'
				html+=	'</div>'
			$(this).parents('.choose-wrapper').append(html);
			//循环添加区县
			var countys=['徐汇区','闵行区','松江区']
			for(var i in countys){
				$('.choose-county').append('<span>'+countys[i]+'</span>');
			}
		}
		//点击区县，关闭选框
		$('.choose-wrapper').on('click','.choose-county span',function(){
			var county=$(this).text();
			$(this).parents('.choose-wrapper').siblings('input').val(city+'-'+county);
			$('.choose-wrapper').slideUp(300);
		})
	})
	
	//点击所选城市名，重新回到城市选择
	$('.choose-wrapper').on('click','.checked-item',function(e){
		e.stopPropagation();
		$(this).parents('.choose-wrapper').find('.choose-cont').show();
		$(this).parents('.choose-area').remove();
	})
	
	//选择木材种类
	$('.choose-wood li').click(function(){
		var classify=$(this).text();
		$(this).parents('.choose-wrapper').siblings('input').val(classify);
		$('.choose-wrapper').slideUp(300);
	})
	
	//验证吨位
	$('input[name="ton"]').on('blur',function(){
		checkTon(this)
	})
	
	//点击帮我找车，提示空项
	$('.btn-searchcar').click(function(e){
		e.stopPropagation();
		$('.logistics-search input').each(function(){
			var txt=$(this).parents('dl').find('label').text();
			if ($(this).val()=="") {
				if ($(this).siblings('.warn').length==0) {
					$(this).after('<div class="warn">请填写'+txt+'</div>').show();
					$(this).siblings('.warn').show();
				} else{
					$(this).siblings('.warn').html('请填写'+txt).show();
				}
			}
		})
	})
	
	//关闭提示信息
	$(document).on('click',function(){
		$('.logistics-search input').each(function(){
			if ($(this).val()=='') {
				$(this).siblings('.warn').remove();
			}
		})
	})
	
})
//验证吨位
function checkTon(el){
	if ($(el).attr('name')!='ton') {
		return
	}
	var reg=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
	var $input=$(el)
	var val=$input.val();
	if (reg.test(val)) {
		//如果匹配正数，则显示正数，并保留小数点后两位
		val=Math.floor(val * 100) / 100;
		$input.val(val);
		
		//删除警示
		if ($input.siblings('.warn').length !=0) {
			$input.siblings('.warn').remove();	
		}
	}else{
		if(val==''){
			$input.siblings('.warn').remove();
		}else{
			$input.after('<div class="warn">必须填有效数字</div>');
			$input.siblings('.warn').show();
		}
	}
}