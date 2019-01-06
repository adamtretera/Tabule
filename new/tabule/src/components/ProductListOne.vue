<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  //"computed" vezme data z "store" a pracuje s nimi
  //"data" definuje/vytváří data
  computed: {
    products(){
      return this.$store.state.products; //pomoci this.$ odkazuje na data v "store"
    },
    ...mapGetters([ //vezme vypsane gettery nize a rozdeli je do vlastnich computed properties
      "saleProducts"/*,
      "nextGetter",
      "anotherGetter"
      */
    ])
  },
  //"methods" nechá komponent spustit metody na zavolání
  methods:{
    ...mapActions([
      "reducePrice"
    ])
  }
}
</script>

<style scoped>
  .name{
    font-size: 150%;
    color: red;
  }
</style>
