function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var hA;
  //var s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  hA = (hA < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  //s = (s < 10) ? "0" + s : s;

  hA = h - 7;

  var time = h + ":" + m;
  var timeA = hA + ":" + m;
  document.getElementById("mojehodiny").innerText = time;
  document.getElementById("mojehodiny").textContent = time;

  document.getElementById("hodinyA").innerText = timeA;
  document.getElementById("hodinyA").textContent = timeA;


  setTimeout(showTime, 1000);
}

showTime();
