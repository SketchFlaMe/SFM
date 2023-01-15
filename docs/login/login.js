var user
var input_username
var input_password
let inputUsername = document.getElementById("username")
let inputPassword = document.getElementById("password")
var headers = document.getElementById("headers")
var userList
var userExists
var userListMD5 = "1"
var userListMD5New = "2"
let headers2 = document.querySelector("#headers2");
var verificationCode
let classVerificationCode = document.querySelector(".verificationCode");
var input_VerificationCode
let inputVerificationCode = document.getElementById("verificationCode")
var displayPassword = 0
//初始化


fetch("user/list.json")
    .then((response) => response.json())
	.then((json) => userList = (json.userList));
//初始化-获取用户列表(防止undefined)

//需要添加:获取初始化userlist.json的MD5码(userListMD5)

/* input_username ="FQUVCT"
input_password ="1234" */

/* .then((json) => user = 1); */
function fun(){
	console.log(user);
	console.log(user.username);
	return true;
}




function getJson() {
	user = {}
	input_username = inputUsername.value
	input_username=input_username.toLowerCase()
	//需要添加:获取输入时的userlist.json的MD5码(userListMD5New)
	if (userListMD5 != userListMD5New){
	fetch("user/list.json")
		.then((response) => response.json())
		.then((json) => userList = (json.userList));
	//获取最新用户列表
	}//判断是否需要更新userlist.json
	
	userExists = userList.includes(input_username)
	//判断用户是否存在
	if (userExists==true){
		var jsonName="user/"+input_username+"/data.json" //获取对应用户信息文件
		fetch(jsonName)
			.then((response) => response.json())
			.then((json) => user = (json));
		console.log("getting success");
		headers.src="user/"+input_username+"/headers.png"; //获取用户头像
		headers2.style.opacity = "0";
	}else{
		headers.src="user/undefined/headers.png";
		headers2.style.opacity = "1";
	} //用户名错误时 转为默认头像
}

//验证码

function random(min, max) {
 
  return Math.floor(Math.random() * (max - min)) + min;
 
}
for (var i = 1; i <= 1; i++) {
 
  verificationCode=random(1000, 9999);
 
}
classVerificationCode.innerHTML=verificationCode;

//重设验证码
function resetVerificationCode(){
	verificationCode=random(1000, 9999);
	classVerificationCode.innerHTML=verificationCode;
}

//显示密码
function funDisplayPassword(){
	if(displayPassword == 0){
		inputPassword.type="text";
		displayPassword = 1
	}else{
		inputPassword.type="password";
		displayPassword = 0
	}
}

//登入

function login(){
	input_username = inputUsername.value
	input_username=input_username.toLowerCase()
	input_password = inputPassword.value
	console.log(input_username)
	//输入用户名、密码
	
	if (userListMD5 != userListMD5New){
	fetch("user/list.json")
		.then((response) => response.json())
		.then((json) => userList = (json.userList));
	//获取最新用户列表
	}//判断是否需要更新userlist.json
	userExists = userList.includes(input_username)
	
	input_VerificationCode = inputVerificationCode.value
	
	//输入验证码
	
	if (userExists==true){
		var jsonName="user/"+input_username+"/data.json" 
		fetch(jsonName)
			.then((response) => response.json())
			.then((json) => user = (json));
		user.username = user.username.toLowerCase()
		//获取对应用户信息文件(写两遍 防止出错)
	
		if (input_username == user.username && input_password == user.password && input_VerificationCode == verificationCode) {
			console.log("登入成功");
			alert("登入成功");
		}else{
			resetVerificationCode()
			console.log("登入失败");
			alert("登入失败");
		};
	}else{
		resetVerificationCode()
		console.log("登入失败");
		alert("登入失败");
		
	}
};



