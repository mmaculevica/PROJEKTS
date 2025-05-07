function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username == "admin" && password == "admin"){
    alert("Login veiksmīgs");
    window.location.href = "index.html";
  }
}
function signup(){
  alert("Reģistrācija veiksmīga");
   window.location.href = "index.html";
}