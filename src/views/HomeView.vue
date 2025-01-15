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

    <Contactos></Contactos>
    <br>

    <Footer></Footer>    
  </div>
</template>

<script>
import Populares from '@/components/HomeComponents/Populares.vue';
import Ofertas from '@/components/HomeComponents/Ofertas.vue';
import Contactos from '@/components/GeneralComponents/Contactos.vue';
import Footer from '@/components/GeneralComponents/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Populares,
    Ofertas,
    Contactos,
    Footer
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
