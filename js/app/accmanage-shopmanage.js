$(function() {
	//上传地址在标签data-url上
	$('#fileupload1').fileupload({
		dataType: 'json',
		done: function(e, data) {
			/*$.each(data.result.files, function(index, file) {
				$('<p/>').text(file.name).appendTo(document.body);
			});*/
		}
	});
	$('#fileupload2').fileupload({
		dataType: 'json',
		done: function(e, data) {
			/*$.each(data.result.files, function(index, file) {
				$('<p/>').text(file.name).appendTo(document.body);
			});*/
		}
	});
})