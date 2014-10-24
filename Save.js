localStorage.setItem("Veiwer", "1");
if(localStorage.getItem("user")==null){
var user = window.prompt("Please leave your Nick so we Know what to call");
localStorage.setItem("user", user);
}
else if(user=="HASHARAHHA14"){
  unlock();
  alert("Welcome HASHARAHHA14")
}
else{
alert("Welcome, "+localStorage.getItem("user"));
}
