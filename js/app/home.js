(function($){
	//垂直滚动
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24 //每行的高度
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);

$(function() {
	//轮播图
	function gallery() {
		var $this = $(".home-banner .img_list");
		var len = $this.children("li").length;
		var iNow = 0;
		var times = null;
		autoPlay();
		var prev = $this.parents("div").find(".banner_prev");
		var next = $this.parents("div").find(".banner_next");
		
		//图片懒加载
		function setSrc(curr){
			var imgUrl='http://192.168.1.159:8020/WebUi/img/home/';
			var srcArr=['banner1.jpg','banner2.png','banner3.jpg'];//所有轮播图片路径
			var newImgs={};
			newImgs[curr]=new Image();
			newImgs[curr].src=imgUrl+srcArr[curr];
			newImgs[curr].onload=function(){
				if(!$('.img_list>li').eq(curr).find('img').attr('src')){
					$('.img_list>li').eq(curr).find('img').attr('src',newImgs[curr].src);
				}
				var next_i=parseInt(curr+1);
				if(next_i>=srcArr.length){
					next_i=0;
				}
				newImgs[next_i]=new Image();
				newImgs[next_i].src=imgUrl+srcArr[next_i];
				if(!$('.img_list>li').eq(next_i).find('img').attr('src')){
					$('.img_list>li').eq(next_i).find('img').attr('src',newImgs[next_i].src);
				}
			}
			
		}
		setSrc(iNow);
		function autoPlay() {
			times = setInterval(function() {
				iNow++;
				change(iNow);
			}, 5000);
		};

		function change(num) {
			if(num > len - 1) {
				num = 0;
				iNow = num;
			}
			if(num < 0) {
				num = len - 1;
				iNow = num;
			}
			setSrc(iNow)
			$this.stop(true);
			$this.find("li").siblings().stop().animate({
				opacity: 0
			}, 500).css("z-index", 1).end().eq(num).stop().animate({
				opacity: 1
			}, 800).css("z-index", 2);
			$this.next(".banner_focus").find("a").eq(num).addClass("on").siblings().removeClass("on");
		};

		$this.parent(".banner_box").mouseenter(function() {
			clearInterval(times);
			prev.show();
			next.show();
		}).mouseleave(function() {
			autoPlay();
			prev.hide();
			next.hide();
		});

		prev.click(function() {
			iNow--;
			change(iNow);
		});
		next.click(function() {
			iNow++;
			change(iNow);
		});
		$(".banner_focus a").each(function(i) {
			$(this).mouseover(function() {
				iNow = i;
				change(i);
			});
		});
	};
	gallery();
	
	//用户模块
	$(".home-user .tab-nav li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".home-user .tab-cont").eq($(this).index()).removeClass("hide").siblings('.tab-cont').addClass("hide");
	});
	
	//成交动态
	$('.myscroll').myScroll({
		speed: 20, //数值越大，速度越慢
		rowHeight: 30 //li的高度
	});
	
	
	//成交动态移入提示效果
    $(".myscroll").on('mousemove','.scrollName',function(ev){
        var str=$(this).parent().find('span').html();
        $("#tip_message").show();
        $("#tip_message").html(str);
        var t=$(window).scrollTop();
        var x=ev.clientX+20;
        var y=ev.clientY+t-15;
        $("#tip_message").css({left:x,top:y});
    });
    $(".myscroll").on('mouseout','.scrollName',function(ev){
        $("#tip_message").hide();
    });
    //芬木商城底部轮播
    var scSwiper = new Swiper('.slide-warp .swiper-container',{
	    slidesPerView: 5,
	    loop: true,
	    autoplayDisableOnInteraction : false,
	    autoplay:30000
	  })
    
    //合作伙伴
    var scSwiper = new Swiper('.partner-list-wrap',{
	    slidesPerView: 4,
	    loop: true,
	    autoplayDisableOnInteraction : false,
	    autoplay:3000
	  })
})


