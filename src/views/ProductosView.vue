<template>
  <div>
    <Banner></Banner>
    <ListaProductosComponent></ListaProductosComponent>
  </div>
</template>

<script>
import ListaProductosComponent from '@/components/ProductosComponents/ListaProductosComponent.vue';
import Banner from '@/components/GeneralComponents/Banner.vue';

export default {
    name: 'ProductosView',
    components: {
        ListaProductosComponent,
        Banner
    }
}
</script>

<style>

</style>