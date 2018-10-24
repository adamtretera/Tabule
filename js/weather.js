var request = new XMLHttpRequest(); //vytvori novy request

request.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
    var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string
    console.log(work.weather[0].main);
    var mainWeather = work.weather[0].main;
    console.log(work.weather[0].description);
    var descriptionWeather = work.weather[0].description;
    console.log(work.main.temp);
    var temperature = work.main.temp;
    console.log(work.main.humidity);
    var humidity = work.main.humidity;
    console.log(work.wind.speed);
    var wind = work.main.speed;
    console.log(work.name);
    var city = work.name;
    console.log('-----------------');
  }
};

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
request.send(); //odesle request


var daily = new XMLHttpRequest(); //vytvori novy request

daily.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
    var work = JSON.parse(daily.responseText); //prevadi vraceny JSON na string
    var day1h9Icon = work.list[0].weather[0].icon; //day1 = den 1, h9 = hodina 9:00 (přiklad h12 = 12:00, h0 = 00:00)
    console.log(day1h9Icon);
  }
};

daily.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
daily.send(); //odesle request
