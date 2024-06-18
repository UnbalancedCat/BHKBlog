document.getElementById("item").style.display="none";
function signin(){
   	document.getElementById("item").style.display="";
	document.getElementById("mask-extra").style.opacity="0.1";
}
function popdown(){
    document.getElementById("item").style.display="none";
	document.getElementById("mask-extra").style.opacity="1.0";
}
	
function log() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(!/^[a-z]+$/i.test(username)) {
		alert("用户名中只能包含英文字母\n请重新输入");
	}
	else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(password)) {
		alert("密码必须包含数字和字母，且在 6~18 位之间" + "\n请重新输入");
	}
	else {
		alert("登录正确");
	}
}
