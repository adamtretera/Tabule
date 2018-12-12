function bus() {
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var dayOfTheWeek = date.getDay(); //pocita se od nuly (0-6)
      var currentTime = date.getHours() + ":" + date.getMinutes();

      console.log(dayOfTheWeek);
      console.log(currentTime);
      var checkTime = "work.tyden_SmerChodov[0].cas";

      for(var i = 0; currentTime > eval(checkTime); i++){
        console.log("pokus c." + i)
        checkTime = "work.tyden_SmerChodov[" + i + "].cas";
        if(eval(checkTime) >= currentTime){
          var firstBus = "work.tyden_SmerChodov[" + i + "].cas";
          console.log("Nejblizsi autobus " + eval(firstBus));
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request
}

bus();
