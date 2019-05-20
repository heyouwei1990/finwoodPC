/*绑定手机tab切换*/
$('.bind-tab-hd>li').click(function(){
	var index=$(this).index();
	$(this).addClass('on').siblings().removeClass('on');
	if(index==1){
		$(this).parents('.bind-tab-wrap').find('.unreg').show();
	}else{
		$(this).parents('.bind-tab-wrap').find('.unreg').hide();
	}
});

/*勾选同意协议，按钮变为可点击状态*/
$('.agree-btn').change(function(){
	if($(this).prop('checked')){
		$(this).parents('.form').find('.btn-submit').prop('disabled',false);
	}else{
		$(this).parents('.form').find('.btn-submit').prop('disabled',true);
	}
});
