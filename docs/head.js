let loader = document.querySelector(".load_bg");
let headloader = document.querySelector(".head_00");
let headloader2 = document.querySelector(".head_02");
let head_right = document.querySelector(".head_right");
var width = document.body.clientWidth; 
var head_top_on=0;

window.onload = function () {
	loader.style.display = "none";
	/* head_right.style.display = "block";
	head_right.style.opacity = "1"; */
}


var id=setInterval(function function_name () {
	console.log(document.body.clientWidth);
	width = document.body.clientWidth;
	if (width <= 500&&head_top_on==1){
		headloader.style.display = "none";
		headloader2.style.display = "none";
		head_right.style.opacity = "1";
		head_right_list.style.opacity = "1";
		head_top_on=0;
	}else if(width > 500&&head_top_on==0){
		headloader.style.display = "flex";
		headloader2.style.display = "flex";
		headloader.className="head";
		headloader2.className="head_2";
		head_right.style.opacity = "0";
		head_right_list.style.opacity = "0";
		/* head_right.style.opacity = "1"; */
		head_top_on=1;
	}
},1000);


//展开

/* let head_right = document.querySelector(".head_right"); */
let head_right_list = document.querySelector(".head_right_list");

head_right.onclick = function(){
	head_right.classList.toggle('active')
	head_right_list.classList.toggle('active')
}