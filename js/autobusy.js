function bus() {
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var dayOfTheWeek = date.getDay(); //pocita se od nuly (0-6)
      var currentTime = date.getHours() + ":" + (date.getMinutes());
      var checkTimeChodov = "work.tyden_SmerChodovZNaJelenach[0].cas";
      var checkTimeNaJelenach = "work.tyden_SmerNaJelenachZChodov[0].cas";
      var partOfWeek = "tyden";
      var currentTimeDuration = moment.duration(currentTime, "HH:mm"); //curent time v duration aby se s nim dalo pocitat
      var secRemaining = 59 - date.getSeconds(); //pro zobrazovani sekund
      secRemaining = (secRemaining < 10) ? "0" + secRemaining : secRemaining; //sekundy se budou zobrazovat ve spravnem formatu (05 ne 5)

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
          //Mobile vypis
          document.getElementsByClassName("previousBusChodov")[0].innerText = eval(previousBusChodov);
          document.getElementsByClassName("previousBusNumberChodov")[0].innerText = eval(previousBusNumberChodov);
          document.getElementsByClassName("firstBusChodov")[0].innerText = eval(firstBusChodov);
          document.getElementsByClassName("firstBusNumberChodov")[0].innerText = eval(firstBusNumberChodov);
          document.getElementsByClassName("secondBusChodov")[0].innerText = eval(secondBusChodov);
          document.getElementsByClassName("secondBusNumberChodov")[0].innerText = eval(secondBusNumberChodov);
          //Desktop vypis
          document.getElementsByClassName("previousBusChodov")[1].innerText = eval(previousBusChodov);
          document.getElementsByClassName("previousBusNumberChodov")[1].innerText = eval(previousBusNumberChodov);
          document.getElementsByClassName("firstBusChodov")[1].innerText = eval(firstBusChodov);
          document.getElementsByClassName("firstBusNumberChodov")[1].innerText = eval(firstBusNumberChodov);
          document.getElementsByClassName("secondBusChodov")[1].innerText = eval(secondBusChodov);
          document.getElementsByClassName("secondBusNumberChodov")[1].innerText = eval(secondBusNumberChodov);

          //Countdown
          var firstBusChodovCountdown = moment.duration(moment.duration(eval(firstBusChodov), "HH:mm").subtract(currentTimeDuration)).asMinutes() - 1; //kolik zbyva casu do prijezdu (v minutach)
          var firstBusChodovCountdownSec = firstBusChodovCountdown + ":" + secRemaining; //minuty + sekundy
          var secondBusChodovCountdown = moment.duration(moment.duration(eval(secondBusChodov), "HH:mm").subtract(currentTimeDuration)).asMinutes() - 1; //kolik zbyva casu do prijezdu (v minutach)
          var secondBusChodovCountdownSec = secondBusChodovCountdown + ":" + secRemaining; //minuty + sekundy

          //Countdown opatření aby se čísla nezobrazovaly v mínusu
          if (parseInt(firstBusChodovCountdown, 10) < 0) {
            document.getElementsByClassName("firstBusChodovCountdownSec")[0].innerText = "0:00";
            document.getElementsByClassName("firstBusChodovCountdownSec")[1].innerText = "0:00";
          } else {
            document.getElementsByClassName("firstBusChodovCountdownSec")[0].innerText = firstBusChodovCountdownSec;
            document.getElementsByClassName("firstBusChodovCountdownSec")[1].innerText = firstBusChodovCountdownSec;
          }
          document.getElementsByClassName("secondBusChodovCountdownSec")[0].innerText = secondBusChodovCountdownSec;
          document.getElementsByClassName("secondBusChodovCountdownSec")[1].innerText = secondBusChodovCountdownSec;
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
          //Mobile
          document.getElementsByClassName("previousBusNaJelenach")[0].innerText = eval(previousBusNaJelenach);
          document.getElementsByClassName("previousBusNumberNaJelenach")[0].innerText = eval(previousBusNumberNaJelenach);
          document.getElementsByClassName("firstBusNaJelenach")[0].innerText = eval(firstBusNaJelenach);
          document.getElementsByClassName("firstBusNumberNaJelenach")[0].innerText = eval(firstBusNumberNaJelenach);
          document.getElementsByClassName("secondBusNaJelenach")[0].innerText = eval(secondBusNaJelenach);
          document.getElementsByClassName("secondBusNumberNaJelenach")[0].innerText = eval(secondBusNumberNaJelenach);
          //Desktop
          document.getElementsByClassName("previousBusNaJelenach")[1].innerText = eval(previousBusNaJelenach);
          document.getElementsByClassName("previousBusNumberNaJelenach")[1].innerText = eval(previousBusNumberNaJelenach);
          document.getElementsByClassName("firstBusNaJelenach")[1].innerText = eval(firstBusNaJelenach);
          document.getElementsByClassName("firstBusNumberNaJelenach")[1].innerText = eval(firstBusNumberNaJelenach);
          document.getElementsByClassName("secondBusNaJelenach")[1].innerText = eval(secondBusNaJelenach);
          document.getElementsByClassName("secondBusNumberNaJelenach")[1].innerText = eval(secondBusNumberNaJelenach);

          //Countdown
          var firstBusNaJelenachCountdown = moment.duration(moment.duration(eval(firstBusNaJelenach), "HH:mm").subtract(currentTimeDuration)).asMinutes() - 1; //kolik zbyva casu do prijezdu (v minutach)
          var firstBusNaJelenachCountdownSec = firstBusNaJelenachCountdown + ":" + secRemaining; //minuty + sekundy
          var secondBusNaJelenachCountdown = moment.duration(moment.duration(eval(secondBusNaJelenach), "HH:mm").subtract(currentTimeDuration)).asMinutes() - 1; //kolik zbyva casu do prijezdu (v minutach)
          var secondBusNaJelenachCountdownSec = secondBusNaJelenachCountdown + ":" + secRemaining; //minuty + sekundy

          //Countdown opatření aby se čísla nezobrazovaly v mínusu
          if (parseInt(firstBusNaJelenachCountdown, 10) < 0) {
            document.getElementsByClassName("firstBusNaJelenachCountdownSec")[0].innerText = "0:00";
            document.getElementsByClassName("firstBusNaJelenachCountdownSec")[1].innerText = "0:00";
          } else {
            document.getElementsByClassName("firstBusNaJelenachCountdownSec")[0].innerText = firstBusNaJelenachCountdownSec;
            document.getElementsByClassName("firstBusNaJelenachCountdownSec")[1].innerText = firstBusNaJelenachCountdownSec;
          }
          document.getElementsByClassName("secondBusNaJelenachCountdownSec")[0].innerText = secondBusNaJelenachCountdownSec;
          document.getElementsByClassName("secondBusNaJelenachCountdownSec")[1].innerText = secondBusNaJelenachCountdownSec;
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(bus, 1000); //refresh co 1000 milisekund = 1sekundu
}

bus();
