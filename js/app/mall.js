$(function() {
	//筛选条件删除
	$(".mall-filter .sxtj").on("click", "i", function() {
		$(this).parent().remove();
	})
	//大类 选择
	$(".mall-filter .types").on("click", "li", function() {
		//已选择不触发了
		if(!$(this).hasClass("active")) {
			$(this).addClass("active").siblings().removeClass("active");

			var sxtj = $(".mall-filter .sxtj ul");
			for(var i = 0; i < sxtj.find("li").length; i++) {
				var li = sxtj.find("li").eq(i);
				if(li.attr("data-type") == "types") {
					li.remove();
				}
			}
			if($(this).text() != "不限") {
				sxtj.prepend('<li data-type = "types">' + $(this).text() + '<i></i></li>')
			}
		}
	})
	//品种 选择
	$(".mall-filter .variety").on("click", "li", function() {
		//已选择不触发了
		if(!$(this).hasClass("active")) {
			$(this).addClass("active").siblings().removeClass("active");

			var sxtj = $(".mall-filter .sxtj ul");
			for(var i = 0; i < sxtj.find("li").length; i++) {
				var li = sxtj.find("li").eq(i);
				if(li.attr("data-type") == "variety") {
					li.remove();
				}
			}
			if($(this).text() != "不限") {
				sxtj.append('<li data-type = "variety">' + $(this).text() + '<i></i></li>')
			}
		}
	})
	//列表排序
	$(".mall-list .list-head li").on("click", function() {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).hasClass('descending')) {
			$(this).removeClass('descending').addClass('ascending');
		}else
		if ($(this).hasClass('ascending')) {
			$(this).removeClass('ascending').addClass('descending');
		}
	})
})