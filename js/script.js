function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var hA; //USA
  var hL; //London
  var hT; //Tokyo
  var hUTC; //Universal Time Zone
  //var s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  hA = (hA < 10) ? "0" + h : h;
  hL = (hL < 10) ? "0" + h : h;
  hT = (hT < 10) ? "0" + h : h;
  hUTC = (hUTC < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  //s = (s < 10) ? "0" + s : s;

  hA = h - 6;
  hL = h - 1;
  hT = h + 7;
  hUTC = h - 2;

  var time = h + ":" + m;
  var timeA = hA + ":" + m;
  var timeL = hL + ":" + m;
  var timeT = hT + ":" + m;
  var timeUTC = hUTC + ":" + m;

  document.getElementById("mojehodiny").innerText = time;
  document.getElementById("mojehodiny").textContent = time;

  document.getElementById("hodinyA").innerText = timeA;
  document.getElementById("hodinyA").textContent = timeA;

  document.getElementById("hodinyL").innerText = timeL;
  document.getElementById("hodinyL").textContent = timeL;

  document.getElementById("hodinyT").innerText = timeT;
  document.getElementById("hodinyT").textContent = timeT;

  document.getElementById("hodinyUTC").innerText = timeUTC;
  document.getElementById("hodinyUTC").textContent = timeUTC;

  setTimeout(showTime, 1000);
}

showTime();
