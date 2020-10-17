document.querySelector(".eror").innerHTML = "";
const btnShow = document.querySelector(".hide-show");
const btnLogin = document.getElementById("masuk");
var user = document.getElementById("user");
var pass = document.getElementById("password");
function Input() {
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input)=> {
		input.addEventListener("click", function() {
			document.querySelector(".eror").innerHTML = "";
			user.style.color = "#888";
			pass.style.color = "#888";
		})
	})
}
function Login() {
	if(user.value == "admin" && pass.value == "123") {
		alert("Login Berhasil");
		window.location.href = "https://google.com";
	} else if(user.value == "" && pass.value == "") {
		document.querySelector(".eror").innerHTML = "Input Tidak Boleh Kosong!";
		Input()
	} else {
		document.querySelector(".eror").innerHTML = "Username / Password Salah!";
		user.style.color = "red";
		pass.style.color = "red";
		Input()
	}
}
btnLogin.addEventListener("click", Login);
function showPass() {      
	const pwd = document.getElementById("password");
	if(pwd.getAttribute("type") === "password") {
		pwd.setAttribute("type", "text")
	} else {
		pwd.setAttribute("type", "password")
	}
} 
btnShow.addEventListener("click", showPass);