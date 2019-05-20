//兼容ie下的placeholder；
//var doc=document,inputs=doc.getElementsByTagName('input'),supportPlaceholder='placeholder'in doc.createElement('input'),placeholder=function(input){var text=input.getAttribute('placeholder'),defaultValue=input.defaultValue;
//if(defaultValue==''){
//  input.value=text;
//  input.style.color = "#999";
//}
//  input.onfocus=function(){
//  	input.style.color = "#333";
//      if(input.value===text){this.value=''}};
//      input.onblur=function(){
//      	if(input.value===''){
//      		this.value=text;
//      		input.style.color = "#999";
//      	}
//      }
//  };
//  if(!supportPlaceholder){
//      for(var i=0,len=inputs.length;i<len;i++){
//      	var input=inputs[i],text=input.getAttribute('placeholder');
//          if(input.type==='text'&&text){placeholder(input)
//      }
//  }
//}
$.fn.placeholder = function(options) {
     var opts = $.extend({}, $.fn.placeholder.defaults, options);
     var isIE = document.all ? true : false;
     return this.each(function() {
         var _this = this,
             placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
         if (isIE) {
         	//如果默认值为空，才会显示placeholder
         	if(_this.defaultValue==""){
         		_this.setAttribute("value", placeholderValue);
         		_this.style.color='#b2b2b2';
         	}else{
         		_this.style.color='#333';
         	}
            if(_this.tagName=="TEXTAREA"){
             	_this.innerHTML= placeholderValue;//如果是文本框，赋值value会无效
            }
            _this.onfocus = function() {
                $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                _this.style.color='#333';
            };
            _this.onblur = function() {
                if($.trim(_this.value)==""){
                	_this.value = placeholderValue;
         			_this.style.color='#b2b2b2';
                }else{
         			_this.style.color='#333';
                }
            };
         }
     });
 };
 $('input').placeholder();
 $('textarea').placeholder();
(function(){
	var wood=function(){
		//confirm 弹框
		this.confirm=function(obj){
			var options={
				msg:'',						//提示信息
				ensure:'确认',				//黄色按钮内容
				cancel:'取消',				//绿色按钮内容
				isOne:false,				//是否只有一个按钮
				callback:function(){},		//黄色按钮回调
				cancelback:function(){},	//绿色按钮回调
				again:false,				//设true则回调时不关闭弹框
				ensureHref:'javascript:void(0)',//黄色按钮链接
				cancelHref:'javascript:void(0)',//绿色按钮链接
				width:400,			//弹框宽度
				height:240,			//弹框高度
				closable:true		//关闭功能
			};
			$.extend(options,obj);
			var html = '<div class="dialog dialog-confirm">'
				html +='<div class="maskbg"></div>'
				html +='<div class="dialog-cont" style="width:'+options.width+'px;height:'+options.height+'px;">'
				html +='<div class="close"></div>'
				html +='<div class="confirm-inner">'
				html +='<div class="confirm-txt">'+options.msg+'</div>'
				html +='</div>'
				html +='<div class="btn-groups">'
				html +='<a class="btn-green" href="'+options.cancelHref+'">'+options.cancel+'</a>'
				html +='<a class="btn-orange" href="'+options.ensureHref+'">'+options.ensure+'</a>'
				html +='</div></div></div>';
			if ($('.dialog-confirm').length==0) {
				$('body').append(html);
			} else{
				$('.dialog-confirm').find('.confirm-txt').html(options.msg);
				$('.dialog-confirm').find('.btn-green').html(options.cancel);
				$('.dialog-confirm').find('.btn-orange').html(options.ensure);
			}
			$('.dialog-confirm').show();
			//如果isOne为true,则显示一个确认按钮
			if (options.isOne) {
				$('.dialog-confirm').find('.btn-green').remove();
			}
			//取消关闭按钮
			if (!options.closable) {
				$('.dialog-confirm .close').hide();
			}
			//点击绿色确认按钮回调
			$('.dialog-confirm .btn-groups>.btn-green').on('click',function(){
				if (typeof options.cancelback=='function') {
					options.cancelback();
				}
			});
			//点击关闭，取消，遮罩层关闭弹框
			$('.dialog-confirm .close,.dialog-confirm .maskbg,.dialog-confirm .btn-groups>.btn-green').on('click',function(){
				if(options.closable){
					$(this).parents('.dialog-confirm').stop().fadeOut(200,function(){
						$(this).remove();
					});
				};
			});
			//点击黄色确认按钮，关闭弹框并且回调
			$('.dialog-confirm .btn-groups>.btn-orange').on('click',function(){
				if (typeof options.callback=='function') {
					options.callback();
				}
				if(!options.again){
					$(this).parents('.dialog-confirm').stop().fadeOut(200,function(){
						$(this).remove();
					});
				};
			});
			
		};
		
		//弹框修正
		this.popup=function(obj){
			var options={
				content:'',						//提示信息
				rightBtn:'确认',				//黄色按钮内容
				leftBtn:'取消',				//绿色按钮内容
				oneBtn:false,				//是否只有一个按钮
				ensureBack:function(){},		//黄色按钮回调
				cancelBack:function(){},		//绿色按钮回调
				ensureHref:'javascript:void(0)',//黄色按钮链接
				cancelHref:'javascript:void(0)',//绿色按钮链接
				width:400,			//弹框宽度
				height:240,			//弹框高度
				closable:true,		//关闭功能
				preventClose:false  //阻止确认关闭
			};
			$.extend(options,obj);
			var idNum=(Math.random()+'').substring(2);
			var _id='id'+idNum;
			var html = '<div id="'+ _id +'" class="dialog dialog-confirm">'
				html +='<div class="maskbg"></div>'
				html +='<div class="dialog-cont" style="width:'+options.width+'px;height:'+options.height+'px;">'
				html +='<div class="close"></div>'
				html +='<div class="confirm-inner">'
				html +='<div class="confirm-txt">'+options.content+'</div>'
				html +='</div>'
				html +='<div class="btn-groups">'
				html +='<a class="btn-green" href="'+options.cancelHref+'">'+options.leftBtn+'</a>'
				html +='<a class="btn-orange" href="'+options.ensureHref+'">'+options.rightBtn+'</a>'
				html +='</div></div></div>'
			if ($('#'+_id).length==0) {
				$('body').append(html);
			};
			$('#'+_id).show();
			//oneBtn,则显示一个确认按钮
			if (options.oneBtn) {
				$('#'+_id).find('.btn-green').remove();
			};
			//取消关闭按钮
			if (!options.closable) {
				$('#'+_id+' .close').hide();
			};
			//点击关闭，取消，遮罩层关闭弹框
			$('#'+_id+' .close,#'+_id+' .maskbg,#'+_id+' .btn-groups>.btn-green').on('click',function(){
				if(options.closable){
					$(this).parents('#'+_id).stop().fadeOut(200,function(){
						$(this).remove();
					})
				}
			});
			//点击取消关闭弹框并且回调
			$('#'+_id+' .btn-groups>.btn-green').on('click',function(){
				if (typeof options.cancelBack=='function') {
					options.cancelBack();
				};
				if(options.closable){
					$(this).parents('#'+_id).stop().fadeOut(200,function(){
						$(this).remove();
					})
				};
			});
			//点击黄色确认按钮，关闭弹框并且回调
			$('#'+_id+' .btn-groups>.btn-orange').on('click',function(){
				if (typeof options.ensureBack=='function') {
					options.ensureBack();
				};
				if(!options.preventClose){
					$(this).parents('#'+_id).stop().fadeOut(200,function(){
						$(this).remove();
					});
				};
			});
			
		};
		
		//toast
		this.toast=function(obj){
			var options={
				msg:'',   	//信息
				icon:'',    //图标的类名
				delay:2000	//延时时长,毫秒
			};
			$.extend(options,obj);
			var _id='id'+(Math.random()+'').substring(2);
			var html ='<div class="toast-wrap"><i class="'+options.icon+'"></i><p>'+options.msg+'</p></div>';
			if($('.toast-wrap').length==0){
				$('body').append(html);
			};
			//$('.toast-wrap').length==0?$('body').append(html):return;
			$('.toast-wrap').fadeIn(200);
			var timer=setTimeout(function(){
				$('.toast-wrap').fadeOut(200,function(){
					$(this).remove();
				});
				timer=null;
			},options.delay);
		}
	}
	
	window['wood']=new wood()
})();

//返回顶部
function backTop(){
	var st=$(document).scrollTop();
	if(st>0){
		$('.back-top').show();
	}else{
		$('.back-top').hide();
	}
	$('.back-top').click(function(){
		$('html,body').stop().animate({'scrollTop':0},1000);
	})
	$(window).scroll(function(){
		st=$(document).scrollTop();
		if(st>0){
			$('.back-top').show();
		}else{
			$('.back-top').hide();
		}
	})
}
backTop();