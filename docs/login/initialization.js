var width = document.body.clientWidth; 
var height = document.body.clientHeight;
let box1 = document.querySelector(".box1");
//初始化
width1 = width/2-425
width2 = width/2-215
//计算居中

function initialization() {
	if(height<=570){	//屏幕过小 启用默认配置
		height1=95
		height2=0
		height3=95
	}else{	//计算居中
		height2=height/2-285
		height1=height/2-180
		height3=height1-height2
	}
	if(width < 850){	//屏幕过小 使用配置1(关闭背景 计算居中)
		box2.style.display="none";
		box1.style.display="block";
		box3.style.display="block";
		box3.style.width="";
		signupBox3.style.width=""
		signupBox.style.width="410px";
		signupBox.style.height="410px";
		signupBox.style.marginTop=height3+"px";
		signupBox.style.marginBottom=height3+"px";
		box3.style.paddingTop=height2+"px";
		box3.style.marginLeft=width2+"px";
		signupBox3.style.paddingTop=height2+"px";
		signupBox3.style.marginLeft=width2+"px";
	}else if(width <= 1000 || height <= 570){	//屏幕过小 使用配置2(启用背景 计算居中)
		box1.style.display="block";
		box2.style.top=height1+"px";
		box2.style.left=width1+"px";
		box2.style.transform="";
		signupBox.style.marginTop=height3+"px";
		signupBox.style.marginBottom=height3+"px";
		box3.style.paddingTop=height2+"px";
		box3.style.marginLeft=width1+"px";
		signupBox3.style.paddingTop=height2+"px";
		signupBox3.style.marginLeft=width1+"px";
	}
}