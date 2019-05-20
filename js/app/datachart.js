$(document).ready(function(){
	//打开图标弹框
	$(".btn-chart").on("click", function() {
		$(".dialog-datachart").stop().fadeIn();
	})
	$(".dialog-datachart .close,.dialog-datachart .maskbg").on("click", function() {
		$(".dialog-datachart").stop().fadeOut();
	})
	
	//ajax获取到的数据
	var pro={
		name:'奥古曼',
		date:['2017-11-14','2017-11-29','2017-12-01','2017-12-05'],
		price:[606,555,656,506]
	}
	
	//数据处理
	function dispose(pro) {
		var data={
			name:pro.name,
			list:[]
		};
		for(var i=0;i<pro.date.length;i++) {
			var fullDate = pro.date[i].split("-");
			var someDate = new Date(fullDate[0], fullDate[1]-1, fullDate[2]);  
            var tms=Date.UTC(someDate.getFullYear(), someDate.getMonth(), someDate.getDate());  
            data.list.push([tms,pro.price[i]]);  
		}
		return data;
	}
	draw(dispose(pro))
	
	//默认显示三条，点击更多
	var switchBtn=1
	$('.product-data-list .more').click(function(){
		if(switchBtn==1){
			console.log(switchBtn)
			$(this).parents('li').find('.tr-hide').css('display','table-row');
			$(this).html('收起');
			switchBtn=0;
		}else{
			console.log(switchBtn)
			$(this).parents('li').find('.tr-hide').css('display','none');
			$(this).html('更多');
			switchBtn=1;
		}
	})
	
})
function draw(obj){
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-show',
			defaultSeriesType: 'spline',
			width:720,
			height:300
		},
		colors:['#e52217'],
		credits: {
		    enabled: false
		},
		title: {
			text: obj.name+'历史价格趋势',
			x: 0 //center
		},
		xAxis: {
			//categories: obj.month
			title: {  
                text: null,  
            },  
            type: 'datetime',  
            //minTickInterval: 3600*1000,//间隔值                  
            labels: {     
                formatter: function () {   
                    return Highcharts.dateFormat('%m-%d',this.value);
                },  
                rotation:45,//倾斜30度，防止数量过多显示不全  
            },  
		},
		yAxis: {
			title: {
				text: '单价 （元/吨）'
			}
		},
		tooltip: {
			formatter: function() {
	                return '<b>'+ this.series.name +'</b><br/>'+
					(new Date(this.x).getMonth()+1) +'月'+new Date(this.x).getDate()+'日: ￥'+ this.y ;
			}
		},
		legend: {
			enabled:false
		},
		series: [{
			name: '价格',
			data:obj.list,
		}]
	});
}
