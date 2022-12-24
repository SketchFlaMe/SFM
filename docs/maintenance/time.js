var time=document.getElementById("time");
			/* var id=setInterval(function function_name () {
				var date=new Date();
				var years=date.getFullYear();
				var months=date.getMonth();
				var days=date.getDate();
				var weeks=date.getDay();
				var date1=new Date(`${years}-${months+1}-${days}`);
				var times=date-date1;
				var hours=parseInt(times/1000/60/60);
				var minutes=parseInt(times/1000/60%60);
				var seconds=parseInt(times/1000%60);
				var zhou;
				switch(weeks){
					case 0:
						zhou="星期日";
						break;
					case 1:
						zhou="星期一";
						break;
					case 2:
						zhou="星期二";                                              
						break;
					case 3:
						zhou="星期三";
						break;
					case 4:
						zhou="星期四";
						break;
					case 5:
						zhou="星期五";
						break;
					default:
						zhou="星期六";
						break;
				}
				if(seconds==1||seconds==2||seconds==3||seconds==4||seconds==5||seconds==6||seconds==7||seconds==8||seconds==9||seconds==0){
					seconds="0"+seconds;
				}
				if(minutes==1||minutes==2||minutes==3||minutes==4||minutes==5||minutes==6||minutes==7||minutes==8||minutes==9||minutes==0){
					minutes="0"+minutes;
				}
				if(Number(hours)>12){
					var a="PM"
					hours=hours-12;
				}else{
					var a="AM"
				}
				if(hours==1||hours==2||hours==3||hours==4||hours==5||hours==6||hours==7||hours==8||hours==9){
					hours="0"+hours;
				}
				_box.innerHTML="今天是"+years+"年"+months+"月"+days+"日"+"&ensp;"+zhou+"&ensp;"+hours+":"+minutes+":"+seconds+"&ensp;"+a;
				
			},1000); */

			
			
var id=setInterval(function function_name () {

        
    var date = new Date(); //当前客户端的时间日期对象

    console.log(date) //格式化 时间日期字符串

    // 年 月 日 时分秒 星期

    var year = date.getFullYear(); // 年份

    var month = date.getMonth()+1; //月份 0——11

    var days = date.getDate(); //日期

    var hour = date.getHours(); // 24小时制

    var mins = date.getMinutes();// 分钟 0——59

    var secs = date.getSeconds(); //秒 

    var week = date.getDay(); //0——6 星期天：0

     var weeks = '';

     switch(week){

        case 0:

            week = "星期天"
			
			break;
			
        case 1:

            week = "星期一"

			break;
			
        case 2:

            week = "星期二"

			break;
			
        case 3:

            week = "星期三"

			break;
			
        case 4:

            week = "星期四"

			break;
			
        case 5:

            week = "星期五"

			break;
			
        case 6:

            week = "星期六"

     }


 

//    document.write(year+'年'+month+"月"+days+"日"+hour+":"+mins+":"+secs+" "+week+"")
    time.innerHTML="现在是 "+year+"年"+month+"月"+days+"日 "+week+" "+hour+":"+mins+":"+secs+""

    //2022年3月18日 11:45:00 星期五

    var str = date.toLocaleDateString(); //本地时间字符串

    //时间戳

    var timestamp = date.getTime();

    console.log(1);
}, 510)

