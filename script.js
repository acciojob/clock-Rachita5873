//your JS code here. If required.
var val = document.getElementById("timer");
let today = new Date();
let month = today.getMonth()+1;
let year = today.getFullYear();
let date = today.getDate();
let currentDate = month + "/" + date + "/" + year+",";
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
if(minutes < 10){
	minutes = "0"+minutes;
}


if(seconds < 10){
	seconds = "0"+seconds;
}

var currTime = currentDate +  " " +hours + ":" + minutes + ":" + seconds;



val.innerText = currTime

// val.innerText = currTime;




