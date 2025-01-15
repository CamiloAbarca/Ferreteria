<template>
  <div>
    <Banner></Banner>
    <DetalleProductoComponent></DetalleProductoComponent>
    <Contactos></Contactos>
  </div>
</template>

<script>
import Banner from '@/components/GeneralComponents/Banner.vue';
import Contactos from '@/components/GeneralComponents/Contactos.vue';
import DetalleProductoComponent from '@/components/ProductosComponents/DetalleProductoComponent.vue';

export default {
  name: 'DetalleProductoView',
  components: {
    Banner,
    DetalleProductoComponent,
    Contactos
  }

}
</script>

<style>

</style>