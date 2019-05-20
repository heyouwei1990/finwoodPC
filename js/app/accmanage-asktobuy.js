$(function() {
	//起始日期
	laydate.render({
		elem: '#startTime',
		theme: '#f9aa32',
		done: function(value) {
			console.log(value); //得到日期生成的值，如：2017-08-18
		}
	});

	//结束日期
	laydate.render({
		elem: '#endTime',
		theme: '#f9aa32',
	});
	
})