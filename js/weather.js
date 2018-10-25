function repeat(){
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string
      var icon = work.weather[0].icon;
      console.log(icon + ' ikona');
      var temperature = work.main.temp;
      console.log(temperature + ' teplota');
      var humidity = work.main.humidity;
      console.log(humidity + ' vlhkost');
      var wind = work.wind.speed; //m/s
      console.log(wind + ' rychlost vetru');
      console.log('-----------------');
    }

    if (icon == '01d') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Clear sky.svg";
    } else if (icon == '01n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Clear sky night.svg";
    } else if (icon == '02d') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Few clouds.svg";
    } else if (icon == '02n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Few clouds night.svg";
    } else if (icon == '03d' || icon == '03n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Scattered clouds.svg";
    } else if (icon == '04d' || icon == '04n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Broken clouds.svg";
    } else if (icon == '09d' || icon == '09n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Shower rain.svg";
    } else if (icon == '10d' || icon == '10n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Rain.svg";
    } else if (icon == '11d' || icon == '11n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Thunderstorm.svg";
    } else if (icon == '13d' || icon == '13n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Snow.svg";
    } else if (icon == '50d' || icon == '50n') {
      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/Mist.svg";
    }

    document.getElementById("temperatureID").innerText = temperature + '°C';
    document.getElementById("temperatureID").textContent = temperature + '°C';

    document.getElementById("windID").innerText = wind + 'm/s';
    document.getElementById("windID").textContent = wind + 'm/s';

    document.getElementById("humidityID").innerText = humidity + '%';
    document.getElementById("humidityID").textContent = humidity + '%';
  };

  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
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
      console.log("|||||||||||||||||||||||||");
      console.log(work.list[0].dt_txt);
      console.log(work.list[0].weather[0].icon);
      console.log(work.list[0].main.temp);

      console.log(work.list[1].dt_txt);
      console.log(work.list[1].weather[0].icon);
      console.log(work.list[1].main.temp);

      console.log(work.list[2].dt_txt);
      console.log(work.list[2].weather[0].icon);
      console.log(work.list[2].main.temp);

      console.log(work.list[3].dt_txt);
      console.log(work.list[3].weather[0].icon);
      console.log(work.list[3].main.temp);

      console.log(work.list[4].dt_txt);
      console.log(work.list[4].weather[0].icon);
      console.log(work.list[4].main.temp);
      console.log("|||||||||||||||||||||||||");
    }
  };

  daily.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
  daily.send(); //odesle request

  setTimeout(repeat, 900*1000);
}

repeatDaily();
