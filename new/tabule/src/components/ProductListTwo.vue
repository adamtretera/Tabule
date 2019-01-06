<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //"computed" vezme data z "store" a pracuje s nimi
  //"data" definuje/vytváří data
  computed: {
    products(){
      return this.$store.state.products; //pomoci this.$ odkazuje na data v "store"
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  }
}
</script>

<style scoped>
  .name{
    font-size: 150%;
    color: grey;
  }
</style>
