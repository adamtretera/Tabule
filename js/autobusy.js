function bus() {
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var dayOfTheWeek = date.getDay(); //pocita se od nuly (0-6)
      var currentTime = date.getHours() + ":" + date.getMinutes();

      if(dayOfTheWeek <= 4){ //TYDEN
        var checkTime = "work.tyden_SmerChodov[0].cas";

        for(var i = 0; currentTime > eval(checkTime); i++){
          checkTime = "work.tyden_SmerChodov[" + i + "].cas";
          if(eval(checkTime) >= currentTime){
            var firstBus = "work.tyden_SmerChodov[" + i + "].cas";
            var firstBusNumber = "work.tyden_SmerChodov[" + i + "].cislo";
            console.log("Nejblizsi autobus " + eval(firstBus));
            console.log("Cislo autobusu " + eval(firstBusNumber));
          }
        }
      } else if(dayOfTheWeek == 5){ //SOBOTA
        var checkTime = "work.sobota_SmerChodov[0].cas";

        for(var i = 0; currentTime > eval(checkTime); i++){
          checkTime = "work.sobota_Chodov[" + i + "].cas";
          if(eval(checkTime) >= currentTime){
            var firstBus = "work.sobota_SmerChodov[" + i + "].cas";
            console.log("Nejblizsi autobus " + eval(firstBus));
          }
        }
      } else if(dayOfTheWeek == 6){ //NEDELE
        var checkTime = "work.nedele_SmerChodov[0].cas";

        for(var i = 0; currentTime > eval(checkTime); i++){
          checkTime = "work.nedele_Chodov[" + i + "].cas";
          if(eval(checkTime) >= currentTime){
            var firstBus = "work.nedele_SmerChodov[" + i + "].cas";
            console.log("Nejblizsi autobus " + eval(firstBus));
          }
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(bus, 10*1000);
}

bus();
