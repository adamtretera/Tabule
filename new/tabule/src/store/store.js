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
    ]
  }
})
