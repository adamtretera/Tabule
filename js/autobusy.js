function bus() {
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var dayOfTheWeek = date.getDay(); //pocita se od nuly (0-6)
      var currentTime = date.getHours() + ":" + date.getMinutes();
      var checkTimeChodov = "work.tyden_SmerChodovZNaJelenach[0].cas";
      var checkTimeNaJelenach = "work.tyden_SmerNaJelenachZChodov[0].cas";
      var partOfWeek = "tyden";

      //MUSI SE DOPSAT DNY AZ BUDOU V JASONu
      if(dayOfTheWeek <= 5){
        partOfWeek = "tyden";
      } else if(dayOfTheWeek == 6) {
        partOfWeek = "tyden";
      } else {
        partOfWeek = "tyden";
      }
      //SMER CHODOV
      for(var i = 0; currentTime > eval(checkTimeChodov); i++){
        checkTimeChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + i + "].cas";
        if(eval(checkTimeChodov) >= currentTime){
          var firstBusChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + i + "].cas";
          var firstBusNumberChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + i + "].cislo";
          var iPlus = i+1;
          var iMinus = i-1;
          var previousBusChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + iMinus + "].cas";
          var previousBusNumberChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + iMinus + "].cislo";
          var secondBusChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + iPlus + "].cas";
          var secondBusNumberChodov = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + iPlus + "].cislo";
          document.getElementById("previousBusChodov").innerText = eval(previousBusChodov);
          document.getElementById("previousBusNumberChodov").innerText = eval(previousBusNumberChodov);
          document.getElementById("firstBusChodov").innerText = eval(firstBusChodov);
          document.getElementById("firstBusNumberChodov").innerText = eval(firstBusNumberChodov);
          document.getElementById("secondBusChodov").innerText = eval(secondBusChodov);
          document.getElementById("secondBusNumberChodov").innerText = eval(secondBusNumberChodov);
        }
      }

      //SMER NAJELENACH
      for(var y = 0; currentTime > eval(checkTimeNaJelenach); y++){
        checkTimeNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + y + "].cas";
        if(eval(checkTimeNaJelenach) >= currentTime){
          var firstBusNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + y + "].cas";
          var firstBusNumberNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + y + "].cislo";
          var yPlus = y+1;
          var yMinus = y-1;
          var previousBusNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + yMinus + "].cas";
          var previousBusNumberNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + yMinus + "].cislo";
          var secondBusNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + yPlus + "].cas";
          var secondBusNumberNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + yPlus + "].cislo";
          document.getElementById("previousBusNaJelenach").innerText = eval(previousBusNaJelenach);
          document.getElementById("previousBusNumberNaJelenach").innerText = eval(previousBusNumberNaJelenach);
          document.getElementById("firstBusNaJelenach").innerText = eval(firstBusNaJelenach);
          document.getElementById("firstBusNumberNaJelenach").innerText = eval(firstBusNumberNaJelenach);
          document.getElementById("secondBusNaJelenach").innerText = eval(secondBusNaJelenach);
          document.getElementById("secondBusNumberNaJelenach").innerText = eval(secondBusNumberNaJelenach);
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(bus, 10*1000);
}

bus();
