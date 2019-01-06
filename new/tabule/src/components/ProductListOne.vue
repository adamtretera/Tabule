<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //"computed" vezme data z "store" a dá pracuje s nimi
  //"data" definuje/vytváří data
  computed: {
    products(){
      return this.$store.state.products //pomoci this.$ odkazuje na data v "store"
    }
  }
}
</script>

<style scoped>
  .name{
    font-size: 150%;
    color: red;
  }
</style>
