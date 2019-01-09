<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <autobusy></autobusy>
    <pocasi></pocasi>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
import Autobusy from "./components/Autobusy.vue";
import Pocasi from "./components/Pocasi.vue";

export default {
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
    "autobusy": Autobusy,
    "pocasi": Pocasi
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
  body{
    font-family: Arial;
  }
</style>

<!-- npm run dev !-->
