function whatDate(){
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      var date = new Date();
      var months = date.getMonth() + 1;
      console.log(months + " mesic");

      var days = date.getDate() - 1; //-1 je pro spravnou cestu v JSONu
      console.log(days + " den");

      var id = "work.month" + months + "[" + days + "].id"; //vytvori cestu pro JSON
      console.log(eval(id) + " Dnesni datum -1, podle JSONu (pro debuging)"); //eval udela string funkcnim napr. 2 + 2, output = 4

      var header = "work.month" + months + "[" + days + "].header"; //vytvori cestu pro JSON
      document.getElementById("headerID").innerHTML = eval(header);

      var perex = "work.month" + months + "[" + days + "].perex"; //vytvori cestu pro JSON
      document.getElementById("perexID").innerHTML = eval(perex);

      var content = "work.month" + months + "[" + days + "].content"; //vytvori cestu pro JSON
      document.getElementById("contentID").innerHTML = eval(content);
    }
  };

  request.open('GET', 'js/json/dates.json', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(whatDate, 900*1000);
}

whatDate();
