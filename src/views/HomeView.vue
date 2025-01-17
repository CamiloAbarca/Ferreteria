<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/img/hero.png" alt="hero">
    </div>
    <br>
    <h1>Productos Populares</h1>
    <Populares></Populares>
    <br>

    <h1>Ofertas</h1>
    <PromocionesActivas></PromocionesActivas>
    <br>
  </div>
</template>

<script>
import Populares from '@/components/HomeComponents/Populares.vue';
import PromocionesActivas from '@/components/ProveedoresComponents/PromocionesActivas.vue';

export default {
  name: 'HomeView',
  components: {
    Populares,
    PromocionesActivas
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
