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
    <Ofertas></Ofertas>
    <br>

    <h1>Contactos</h1>
    <Contactos></Contactos>
    
  </div>
</template>

<script>
import Populares from '@/components/HomeComponents/Populares.vue';
import Ofertas from '@/components/HomeComponents/Ofertas.vue';
import Contactos from '@/components/HomeComponents/Contactos.vue';

export default {
  name: 'HomeView',
  components: {
    Populares,
    Ofertas,
    Contactos
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
