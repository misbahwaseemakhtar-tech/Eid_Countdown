               //Eid
function countDown(){
var now = new Date() ;   
var eid = new Date(2026,4,27);
var difference = eid.getTime() - now.getTime()


var months= Math.floor(difference / ((1000* 60 * 60* 24 * 30)));
console.log(months)
var days = Math.floor (difference/((1000*60*60*24)) %30);
console.log(days)
var hours = Math.floor(difference/((1000* 60 * 60 ))%24);
console.log(hours)
var minutes = Math.floor(difference/((1000* 60 ))%60);
console.log(minutes)
var seconds= Math.floor(difference/((1000 ))%60);
console.log(seconds)


var monthsElement = document.getElementById("months");
var daysElement = document.getElementById("days");
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

monthsElement.innerText= "Months: " + months;
daysElement.innerText= "Days: " + days;
hoursElement.innerText= "Hours:" + hours;
minutesElement.innerText= "Minutes: " + minutes;
secondsElement.innerText= "Seconds: " + seconds;

}

setInterval(countDown , 1000)