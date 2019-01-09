<template>
  <div id="autobusy">
    <h1>hi there</h1>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  //"computed" vezme data z "store" a pracuje s nimi
  //"data" definuje/vytváří data
  computed: {
    ...mapGetters([ //vezme vypsane gettery nize a rozdeli je do vlastnich computed properties

    ])
  },
  //"methods" nechá komponent spustit metody na zavolání
  methods:{
    ...mapActions([

    ])
  }
}
</script>

<style scoped>

</style>
