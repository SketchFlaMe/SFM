let top_title = document.querySelector(".top_title");
var width = document.body.clientWidth; 


var id=setInterval(function function_name () {
	console.log(document.body.clientWidth);
	width = document.body.clientWidth;
	if (width <= 750){
		top_title.style.opacity = "0";
	}else if(width > 750){
		top_title.style.opacity = "1";
	}
},1000);

