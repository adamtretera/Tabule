import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //rekne programu ze ma pouzit Vuex plugin - importovany vyse

export const store = new Vuex.Store({
  //"state" definuje/vytváří data stejně jako "data" v komponentech
  state: {
    products: [
      {name: "Banana Skin", price: 20},
      {name: "Shiny Star", price: 40},
      {name: "Green Shells", price: 60},
      {name: "Red Shells", price: 80}
    ],
    pocasiData: [
      {teplota: 50, rychlost: 50, vlhkost: 50},
      {teplota: 50, rychlost: 50, vlhkost: 50},
      {teplota: 50, rychlost: 50, vlhkost: 50},
      {teplota: 50, rychlost: 50, vlhkost: 50},
      {teplota: 50, rychlost: 50, vlhkost: 50},
      {teplota: 50, rychlost: 50, vlhkost: 50}
    ]
  },
  //"getters" funguje podobne jako "computed". Vezme data ze "store" a modifikuje je, pote je muze poslat komponentum
  getters: {
    saleProducts: state => {
      //funkce "map()" vezme data, provede s němi nějaký proces a vloží je do proměnné
      let saleProducts = state.products.map( product => {
        return {
          name:"**" + product.name + "**",
          price: product.price / 2
        }
      })
      return saleProducts;
    },
    pocasiDataSet: function() {
      var self=this;
      this.$http.get('https://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98').then(function(response){
        if(response.status == "200"){
            self.teplota: work.main.temp,
            self.rychlost: work.wind.speed,
            self.vlhkost : work.main.humidity
        }
      })
    },
  //"mutations" funguje stejne podobne jako "methods" akorát se dá sledovat pomocí Vue browser pluginu. Neměl by se v nich provádět asynchroní kód (např připojení na api)
  mutations: {
    reducePrice: (state, payload) => {
      store.state.products.forEach( product => {
        product.price -= payload;
      })
    }
  },
  //"actions" provede proces který odkáže na "mutations". Tím se vyřeší problém asynchroního kódu
  actions: {
    reducePrice: (context, payload) => { //context funguje podobně jako store, payload je označení pro data v () přenesené z metody komponentu
      setTimeout(function(){
        context.commit("reducePrice", payload)
      },2000)
    }
  }
})
