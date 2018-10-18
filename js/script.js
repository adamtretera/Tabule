function showTime() {
  var date = new Date();
  var timeUTCMinutes = date.getUTCMinutes();
  timeUTCMinutes = (timeUTCMinutes < 10) ? "0" + timeUTCMinutes : timeUTCMinutes;
  var timeUTC =  date.getUTCHours() + ":" + timeUTCMinutes;

  //h = (h < 10) ? "0" + h : h;

  document.getElementById("hodinyUTC").innerText = timeUTC;
  document.getElementById("hodinyUTC").textContent = timeUTC;

  setTimeout(showTime, 1000);
}

function showTimeCzech() {
  var date = new Date();
  date.setMinutes(date.getMinutes() + 120);

  var timeCzechMinutes = date.getUTCMinutes();
  var timeCzechHours = date.getUTCHours();

  timeCzechMinutes = (timeCzechMinutes < 10) ? "0" + timeCzechMinutes : timeCzechMinutes;
  timeCzechHours = (timeCzechHours < 10) ? "0" + timeCzechHours : timeCzechHours;

  var timeCzech = timeCzechHours + ":" + timeCzechMinutes;

  document.getElementById("mojehodiny").innerText = timeCzech;
  document.getElementById("mojehodiny").textContent = timeCzech;

  setTimeout(showTimeCzech, 1000);
}

function showTimeTokyo() {
  var date = new Date();
  date.setMinutes(date.getMinutes() + 540);

  var timeTokyoMinutes = date.getUTCMinutes();
  var timeTokyoHours = date.getUTCHours();

  timeTokyoMinutes = (timeTokyoMinutes < 10) ? "0" + timeTokyoMinutes : timeTokyoMinutes;

  var timeTokyo = timeTokyoHours + ":" + timeTokyoMinutes;

  document.getElementById("hodinyT").innerText = timeTokyo;
  document.getElementById("hodinyT").textContent = timeTokyo;

  setTimeout(showTimeTokyo, 1000);
}

function showTimeUSA() {
  var date = new Date();
  date.setMinutes(date.getMinutes() - 240);

  var timeUSAMinutes = date.getUTCMinutes();
  var timeUSAHours = date.getUTCHours();

  timeUSAMinutes = (timeUSAMinutes < 10) ? "0" + timeUSAMinutes : timeUSAMinutes;

  var timeUSA = timeUSAHours + ":" + timeUSAMinutes;

  document.getElementById("hodinyA").innerText = timeUSA;
  document.getElementById("hodinyA").textContent = timeUSA;

  setTimeout(showTimeUSA, 1000);
}

function showTimeLondon() {
  var date = new Date();
  date.setMinutes(date.getMinutes() + 180);

  var timeLondonMinutes = date.getUTCMinutes();
  var timeLondonHours = date.getUTCHours();

  timeLondonMinutes = (timeLondonMinutes < 10) ? "0" + timeLondonMinutes : timeLondonMinutes;

  var timeLondon = timeLondonHours + ":" + timeLondonMinutes;

  document.getElementById("hodinyL").innerText = timeLondon;
  document.getElementById("hodinyL").textContent = timeLondon;

  setTimeout(showTimeLondon, 1000);
}

var x = setInterval(function() {
  var date = new Date();

  var hToday = date.getHours();
  var minToday = date.getMinutes();

  var timeNow = (hToday * 60) + minToday;
  var countdown = 1200 - timeNow ;

  document.getElementById("countdownID").innerText = countdown;
  document.getElementById("countdownID").textContent = countdown;
}, 1000);



showTime();
showTimeCzech();
showTimeTokyo();
showTimeUSA();
showTimeLondon();
