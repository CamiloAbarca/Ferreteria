<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/img/hero.png" alt="hero">
    </div>
    <br>
    <h1>Productos Populares</h1>
    <Populares></Populares>
    <br>
    <PromocionesActivas></PromocionesActivas>
    <br>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Populares from '@/components/HomeComponents/Populares.vue';
import PromocionesActivas from '@/components/ProveedoresComponents/PromocionesActivas.vue';

export default {
  name: 'HomeView',
  components: {
    Populares,
    PromocionesActivas
  },
  methods: {
    ...mapActions(['fetchProductos']),
  },
  async created() {
    await this.fetchProductos();
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
