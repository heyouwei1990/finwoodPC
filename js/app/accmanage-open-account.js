$(document).ready(function(){
	
	//个体户切换
	$('[name="selfEmployed"]').change(function(){
		if($(this).val()==0){
			$('[data-status="selfEmployed"]').show();
		}else{
			$('[data-status="selfEmployed"]').hide();
		}
	})
	
	//添加股东信息
	$('.accmanage-open-account .btn-add-shareholder').click(function(){
		var html ='<div class="fill-form">'
			html+='<ul class="input-row-list">'
			html+='<li><dl><dt><i>*</i>股东姓名：</dt><dd><input type="text" placeholder="请输入个人股东姓名或机构名称" /></dd></dl></li>'
			html+='<li><dl><dt><i>*</i>股东证件号：</dt><dd><input type="text" placeholder="三证统一社会信用码，非三证营业执照号" /></dd></dl></li>'
			html+='<li><dl><dt><i>*</i>股东类型：</dt><dd><select class="common-select">'
			html+='<option>个人股东</option><option>机构股东</option></select></dd></dl></li></ul></div>';
		$(this).before(html);
	})
	
	//查看模板（企业授权书）
	$('.btn-look-templet').click(function(){
		$('.dialog-templet').fadeIn(400);
	})
	//关闭
	$('.dialog-templet .close,.dialog-templet .maskbg').click(function(){
		$(this).parents('.dialog-templet').fadeOut(400);
	})
	
	//起始日期
	laydate.render({
		elem: '#startTime0',
		theme: '#f9aa32',
		done: function(value) {
			//console.log(value); //得到日期生成的值，如：2017-08-18
		}
	});

	//结束日期
	laydate.render({
		elem: '#endTime0',
		theme: '#f9aa32',
	});
	
	//起始日期
	laydate.render({
		elem: '#startTime',
		theme: '#f9aa32',
		done: function(value) {
			//console.log(value); //得到日期生成的值，如：2017-08-18
		}
	});

	//结束日期
	laydate.render({
		elem: '#endTime',
		theme: '#f9aa32',
	});
	
})
