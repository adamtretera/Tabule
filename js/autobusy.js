function bus() {
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var dayOfTheWeek = date.getDay(); //pocita se od nuly (0-6)
      var currentTime = date.getHours() + ":" + date.getMinutes();
      var checkTime = "work.tyden_SmerChodovZNaJelenach[0].cas";
      var partOfWeek = "tyden";
      console.log(dayOfTheWeek);

      if(dayOfTheWeek <= 5){
        partOfWeek = "tyden";
      } else if(dayOfTheWeek == 6) {
        partOfWeek = "sobota";
      } else {
        partOfWeek = "nedele";
      }

      for(var i = 0; currentTime > eval(checkTime); i++){
        checkTime = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + i + "].cas";
        if(eval(checkTime) >= currentTime){
          var firstBus = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + i + "].cas";
          var firstBusNumber = "work." + partOfWeek + "_SmerChodovZNaJelenach[" + i + "].cislo";
          console.log("Nejblizsi autobus " + eval(firstBus));
          console.log("Cislo autobusu " + eval(firstBusNumber));
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(bus, 10*1000);
}

bus();
