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
          document.getElementById("firstBusChodov").innerText = eval(firstBusChodov);
          document.getElementById("firstBusNumberChodov").innerText = eval(firstBusNumberChodov);
        }
      }

      //SMER NAJELENACH
      for(var y = 0; currentTime > eval(checkTimeNaJelenach); y++){
        checkTimeNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + y + "].cas";
        if(eval(checkTimeNaJelenach) >= currentTime){
          var firstBusNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + y + "].cas";
          var firstBusNumberNaJelenach = "work." + partOfWeek + "_SmerNaJelenachZChodov[" + y + "].cislo";
          console.log("Nejblizsi autobus smer NaJelenach " + eval(firstBusNaJelenach));
          console.log("Cislo autobusu smer NaJelenach " + eval(firstBusNumberNaJelenach));
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(bus, 10*1000);
}

bus();
