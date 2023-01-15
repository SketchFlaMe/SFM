var loginOrSignup = 1; // 登入=1 注册=0

let loadLoginBox = document.querySelector(".loadLoginBox");
let loginBox = document.querySelector(".loginBox");
let image1 = document.querySelector(".image1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let signupBox3 = document.querySelector(".signupBox3");
let signupBox = document.querySelector(".signupBox");
let loadSignupBox = document.querySelector(".loadSignupBox");
//初始化





function switchModel(){
	if (loginOrSignup == 1){
		loadLoginBox.style.animation="removeLoginBox 1s linear forwards";
		setTimeout(() => {
			loadLoginBox.style.display="none";
			loadLoginBox.style.animation="";
			if(width<850){
				loginBox.style.height="410px";
				loginBox.style.width="410px";
			}else{
				loginBox.style.height="380px";
				loginBox.style.width="380px";
			}
			if (width <= 1000 || height <= 570){
				loginBox.style.marginTop=height3+"px";
				loginBox.style.marginBottom=height3+"px";
			}
		},1000)
		setTimeout(() => {
			box2.style.background="#fec23e";
			if(width >= 850){
				image1.style.transform="translateX(310px)";
				loginBox.style.transform="translateX(-450px)";
			}
		},2000)
		setTimeout(() => {
			image1.src="image/2.png";
			box3.style.display="none";
			loginBox.style.transform="translateX(0px)";
			if(width < 850){
				signupBox3.style.display="block";
			}else{
				signupBox3.style.display="flex";
			}
		},3000)
		setTimeout(() => {
			signupBox.style.height="550px";
			signupBox.style.width="410px";
			if (width <= 1000 || height <= 570){
				signupBox.style.marginTop="";
				signupBox.style.marginBottom="";
			}
			loadSignupBox.style.display="block";
		},3200)
		setTimeout(() => {
			loadSignupBox.style.animation="loadSignupBox 1s linear forwards";
			loginOrSignup = 0;
		},4000)
	}else{
		loadSignupBox.style.animation="removeSignupBox 1s linear forwards";
		setTimeout(() => {
			loadSignupBox.style.display="none";
			loadSignupBox.style.animation="";
			if(width<850){
				signupBox.style.height="410px";
				signupBox.style.width="410px";
			}else{
				signupBox.style.height="380px";
				signupBox.style.width="380px";
			}
			if (width <= 1000 || height <= 570){
				signupBox.style.marginTop=height3+"px";
				signupBox.style.marginBottom=height3+"px";
			}
		},1000) 
		setTimeout(() => {
			box2.style.background="#ff6421";
			if(width >= 850){
				image1.style.transform="translateX(0px)";
				signupBox.style.transform="translateX(450px)";
			}
		},2000)
		setTimeout(() => {
			image1.src="image/1.jpg";
			signupBox3.style.display="none";
			signupBox.style.transform="translateX(0px)";
			if(width < 850){
				box3.style.display="block";
			}else{
				box3.style.display="flex";
			}
		},3000)
		setTimeout(() => {
			loginBox.style.height="550px";
			loginBox.style.width="410px";
			if (width <= 1000 || height <= 570){
				loginBox.style.marginTop="";
				loginBox.style.marginBottom="";
			}
		},3200)
		setTimeout(() => {
			loadLoginBox.style.animation="loadLoginBox 1s linear forwards";
			loadLoginBox.style.display="block";
			loginOrSignup = 1
		},4000)
	}
	return true
}
