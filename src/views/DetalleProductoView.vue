<template>
  <div>
    <Banner></Banner>
    <DetalleProductoComponent></DetalleProductoComponent>
    <Contactos></Contactos>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '@/components/GeneralComponents/Banner.vue';
import Contactos from '@/components/GeneralComponents/Contactos.vue';
import Footer from '@/components/GeneralComponents/Footer.vue';
import DetalleProductoComponent from '@/components/ProductosComponents/DetalleProductoComponent.vue';

export default {
  name: 'DetalleProductoView',
  components: {
    Banner,
    DetalleProductoComponent,
    Contactos,
    Footer
  }

}
</script>

<style>

</style>