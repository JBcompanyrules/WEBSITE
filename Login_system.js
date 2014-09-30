function Auth(){
var p;
var u;
var text;

p = document.getElementById("password").value
u = document.getElementById("username").value

if(u=="Jacob"&&p=="JAB"){
window.alert("Welcome website admin")
window.location ='https://dl.dropboxusercontent.com/s/3rq3mu5d05a5ah8/Jacob_3.html?n=280628040'
}
else if(u=="Colton"&&p=="MD"){
window.location ='https://dl.dropboxusercontent.com/s/l31udzum9smh7ep/Colton_4.html?n=280628040'
}
else if(u=="Death"&&p=="Excalibur"){
window.alert("Welcome Lord death")
window.location ='https://dl.dropboxusercontent.com/s/fsczhhtlhzi01z9/Devon_2.html?n=280628040'
}
else if(u=="the_devals_helper"&&p=="06232001"){
window.alert("Welcome devals helper")
window.location ='https://dl.dropboxusercontent.com/s/6hrq8b05mau63mo/Joshua_1.html?n=280628040'
}
else if(u=="Robotics123"&&p=="ra724"){
window.location ='https://dl.dropboxusercontent.com/s/c3yqj9wkjvoumix/Robotics_5.html?n=280628040'
}
else if(u=="William"&&p=="WD"){
window.alert("Logging in")
window.location ='https://dl.dropboxusercontent.com/s/a800iuurnn65jaf/William_6.html?n=280628040'
}
else if(u=="Brayden"&&p=="MD"){
window.alert("Logging in, welcome")
window.location ='https://dl.dropboxusercontent.com/s/m2qcgkhmlmxz41x/Brayden_7.html?n=280628040'
}
else{
window.alert("error account file not found")
confirm("retry")
}
}

