function repeat(){
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string
      for (var i = 0; i <= 1; i++) {
        document.getElementsByClassName("iconID")[i].src = "Icons/Weather Icons/SVG/" + work.weather[0].icon + ".svg";
        document.getElementsByClassName("temperatureID")[i].innerHTML = (work.main.temp).toFixed(1)  + "°C";
        document.getElementsByClassName("windID")[i].innerHTML = (work.wind.speed).toFixed(1)  + 'm/s';
        document.getElementsByClassName("humidityID")[i].innerHTML = work.main.humidity + '%';
      }
    }
  };

  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(repeat, 900*1000);
}

repeat();

function repeatDaily(){
  var daily = new XMLHttpRequest(); //vytvori novy request

  daily.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(daily.responseText); //prevadi vraceny JSON na string
      //var day1h9Icon = work.list[0].weather[0].icon; //day1 = den 1, h9 = hodina 9:00 (přiklad h12 = 12:00, h0 = 00:00)

      var date = new Date();
      var hoursNow = date.getHours();

      console.log("----------------");
      console.log(hoursNow + ' hoursNow');
      for (var i = 0; i <= 1 ; i++) {
        //za 3h
        document.getElementsByClassName("hours1")[i].innerHTML = moment(work.list[1].dt_txt).format('HH') + ':00';
        document.getElementsByClassName("iconID1")[i].src = "Icons/Weather Icons/SVG/" + work.list[1].weather[0].icon + ".svg";
        document.getElementsByClassName("tempID1")[i].innerHTML = (work.list[1].main.temp).toFixed(1) + "°C";
        document.getElementsByClassName("windID1")[i].innerHTML = (work.list[1].wind.speed).toFixed(1) + 'm/s';
        document.getElementsByClassName("humidityID1")[i].innerHTML = work.list[1].main.humidity + '%';
        //za 6h
        document.getElementsByClassName("hours2")[i].innerHTML = moment(work.list[2].dt_txt).format('HH') + ':00';
        document.getElementsByClassName("iconID2")[i].src = "Icons/Weather Icons/SVG/" + work.list[2].weather[0].icon + ".svg";
        document.getElementsByClassName("tempID2")[i].innerHTML = (work.list[2].main.temp).toFixed(1) + "°C";
        document.getElementsByClassName("windID2")[i].innerHTML = (work.list[2].wind.speed).toFixed(1) + 'm/s';
        document.getElementsByClassName("humidityID2")[i].innerHTML = work.list[2].main.humidity + '%';
        //zitra - 8 (12:00)
        document.getElementsByClassName("iconID3")[i].src = "Icons/Weather Icons/SVG/" + work.list[8].weather[0].icon + ".svg";
        document.getElementsByClassName("tempID3")[i].innerHTML = (work.list[8].main.temp).toFixed(1) + "°C";
        document.getElementsByClassName("windID3")[i].innerHTML = (work.list[8].wind.speed).toFixed(1) + 'm/s';
        document.getElementsByClassName("humidityID3")[i].innerHTML = work.list[8].main.humidity + '%';
        //pozitri - 16 (12:00)
        document.getElementsByClassName("iconID4")[i].src = "Icons/Weather Icons/SVG/" + work.list[16].weather[0].icon + ".svg";
        document.getElementsByClassName("tempID4")[i].innerHTML = (work.list[16].main.temp).toFixed(1) + "°C";
        document.getElementsByClassName("windID4")[i].innerHTML = (work.list[16].wind.speed).toFixed(1) + 'm/s';
        document.getElementsByClassName("humidityID4")[i].innerHTML = work.list[16].main.humidity + '%';
        //po..pozitri - 24 (12:00)
        document.getElementsByClassName("iconID5")[i].src = "Icons/Weather Icons/SVG/" + work.list[24].weather[0].icon + ".svg";
        document.getElementsByClassName("tempID5")[i].innerHTML = (work.list[24].main.temp).toFixed(1) + "°C";
        document.getElementsByClassName("windID5")[i].innerHTML = (work.list[24].wind.speed).toFixed(1) + 'm/s';
        document.getElementsByClassName("humidityID5")[i].innerHTML = work.list[24].main.humidity + '%';
      }
    }
  };

  daily.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
  daily.send(); //odesle request

  setTimeout(repeat, 900*1000);
}

repeatDaily();
