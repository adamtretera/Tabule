<template>
  <div id="pocasi">
    <li v-for="data in pocasiDataSet">
      <span>{{ data.teplota }}</span>
      <span>{{ data.rychlost }}</span>
      <span>{{ data.vlhkost }}</span>
    </li>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  //"computed" vezme data z "store" a pracuje s nimi
  //"data" definuje/vytváří data
  computed: {
    pocasiData(){
      return this.$store.state.pocasiData; //pomoci this.$ odkazuje na data v "store"
    },
    ...mapGetters([ //vezme vypsane gettery nize a rozdeli je do vlastnich computed properties
      "pocasiDataSet"
    ])
  },
  //"methods" nechá komponent spustit metody na zavolání
  methods:{

  }
}
</script>

<style scoped>

</style>
