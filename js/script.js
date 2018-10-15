function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m +":"+ s ;
  document.getElementById("mojehodiny").innerText = time;
  document.getElementById("mojehodiny").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
