<template>
  <div>
    <Banner></Banner>
    <DetalleProductoComponent></DetalleProductoComponent>
    <br><br><br><br><br>
  </div>
</template>

<script>
import Banner from '@/components/GeneralComponents/Banner.vue';
import DetalleProductoComponent from '@/components/ProductosComponents/DetalleProductoComponent.vue';

export default {
  name: 'DetalleProductoView',
  components: {
    Banner,
    DetalleProductoComponent
  }

}
</script>

<style>

</style>