
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick(){

  var firebaseRef = firebase.database().ref();
  var firebaseRef = mainText.value();
}




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
  var secToday = date.getSeconds();

  var secRemaining = 59 - secToday; //Seconds remaining
  var timeNow = (hToday * 60) + minToday; //Minutes from start of the day

  if (timeNow < 480){  //8:00 ZACATEK SKOLY
    var countdownRight = (480 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do začátku školy";
    document.getElementById("countdownIDText").textContent = "Čas do začátku školy";
  } else if (timeNow < 525) { //8:45
    var countdownRight = (525 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 535 ) { //8:55
    var countdownRight = (535 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 580) { //9:40
    var countdownRight = (580 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 600 ) { //10:00
    var countdownRight = (600 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 645) { //10:45
    var countdownRight = (645 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 655 ) { //10:55
    var countdownRight = (655 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 700) { //11:40
    var countdownRight = (700 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 710 ) { //11:50
    var countdownRight = (710 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 755) { //12:35
    var countdownRight = (755 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 765 ) { //12:45
    var countdownRight = (765 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 810) { //13:30
    var countdownRight = (810 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 815 ) { //13:35
    var countdownRight = (815 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 860) { //14:20
    var countdownRight = (860 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 865 ) { //14:25
    var countdownRight = (865 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 910) { //15:10
    var countdownRight = (910 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 915 ) { //15:15
    var countdownRight = (915 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 960) { //16:00
    var countdownRight = (960 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 965 ) { //16:05
    var countdownRight = (965 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 1010) { //16:50
    var countdownRight = (1010 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 1015 ) { //16:55
    var countdownRight = (1015 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 1060) { //17:40
    var countdownRight = (1060 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 1065 ) { //17:45
    var countdownRight = (1065 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 1110) { //18:30
    var countdownRight = (1110 - timeNow) - 1;
    document.getElementById("countdownIDText").innerText = "Jestli máš ještě školu tak mi je tě líto..";
    document.getElementById("countdownIDText").textContent = "Jestli máš ještě školu tak mi je tě líto..";
  } else if (timeNow > 1110 ) { //KONEC SKOLY
    var countdown = (1920 - timeNow) - 1;
    var timeHours = countdown / 60;
    var timeMinutes = countdown % 60;
    var countdownRight = moment.utc().hours(timeHours).minutes(timeMinutes).format("hh:mm");
    document.getElementById("countdownIDText").innerText = "Čas do začátku školy";
    document.getElementById("countdownIDText").textContent = "Čas do začátku školy";
  }

  secRemaining = (secRemaining < 10) ? "0" + secRemaining : secRemaining;

  document.getElementById("countdownID").innerText = countdownRight + ":" + secRemaining;
  document.getElementById("countdownID").textContent = countdownRight + ":" + secRemaining;
}, 1000);

showTime();
showTimeCzech();
showTimeTokyo();
showTimeUSA();
showTimeLondon();
