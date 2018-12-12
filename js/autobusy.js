function bus() {
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var dayOfTheWeek date.getDay(); //pocita se od nuly (0-6)
      var currentTime date.getDate();

      console.log(currentTime);
      console.log(dayOfTheWeek);

      /*for(var i = 0; ; i++){
        if(i > currentTime){
          var firstBus = "work.month[" + i + "].cas";
          console.log(firstBus)
        }*/
      }
  };

  request.open('GET', 'js/json/autobusy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request
}

bus();
