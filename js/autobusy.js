let firstBus;
let firstBusNumber;
let previousBus;
let previousBusNumber;
let secondBus;
let secondBusNumber;
const minutes = moment().minutes();
const hours = moment().hours();
const date = hours + ":" + minutes;

const dayOfTheWeek = moment().isoWeekday();
let partOfWeek = "tyden";
if(dayOfTheWeek <= 5){
  partOfWeek = "tyden";
} else if(dayOfTheWeek == 6) {
  partOfWeek = "tyden";
} else {
  partOfWeek = "tyden";
}

function bus(smer){
  let request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      let work = JSON.parse(request.responseText);

      let checkTime = eval("work." + partOfWeek + "_" + smer + "[0].cas");
      for(var i = 0; date > checkTime; i++){
        checkTime = eval("work." + partOfWeek + "_" + smer + "[" + i + "].cas");

        if (checkTime >= date) {
          firstBus = eval("work." + partOfWeek + "_" + smer + "[" + i + "].cas");
          firstBusNumber = eval("work." + partOfWeek + "_" + smer + "[" + i + "].cislo");
          const iPlus = i+1;
          const iMinus = i-1;
          previousBus = eval("work." + partOfWeek + "_" + smer + "[" + iMinus + "].cas");
          previousBusNumber = eval("work." + partOfWeek + "_" + smer + "[" + iMinus + "].cislo");
          secondBus = eval("work." + partOfWeek + "_" + smer + "[" + iPlus + "].cas");
          secondBusNumber = eval("work." + partOfWeek + "_" + smer + "[" + iPlus + "].cislo");
          console.log(secondBus);
        }
      }
    }
  };

  request.open('GET', 'js/json/busy.json', true);
  request.send();
}

bus("SmerChodovZNaJelenach");

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: function(){
    return{
      groceryList: [
        { id: 0, text: "hi" },
        { id: 1, text:  [firstBus] },
        { id: 2, text: "bye" }
      ]
    }
  }
});

const store = new Vuex.Store({
  state: {
    
  }
});
