<template>
  <div>
    <Banner></Banner>
    <ListaProductosComponent></ListaProductosComponent>
    <Contactos></Contactos>
    <Footer></Footer>
  </div>
</template>

<script>
import ListaProductosComponent from '@/components/ProductosComponents/ListaProductosComponent.vue';
import Banner from '@/components/GeneralComponents/Banner.vue';
import Contactos from '@/components/GeneralComponents/Contactos.vue';
import Footer from '@/components/GeneralComponents/Footer.vue';

export default {
    name: 'ProductosView',
    components: {
        ListaProductosComponent,
        Banner,
        Contactos,
        Footer
    }
}
</script>

<style>

</style>