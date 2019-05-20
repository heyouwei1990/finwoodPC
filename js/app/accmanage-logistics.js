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
	
	//查看原因
	$(".reason").on("click", function() {
		$(".dialog-setaddr").stop().fadeIn();
	})
	$(".dialog-setaddr .close,.dialog-setaddr .btn-green,.dialog-setaddr .maskbg, .fr").on("click", function() {
		$(".dialog-setaddr").stop().fadeOut();
	})
})