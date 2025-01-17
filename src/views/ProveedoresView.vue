<template>
  <div>
    <Banner></Banner>
    <ListaProveedores></ListaProveedores>
    <PromocionesActivas></PromocionesActivas>
    <br>
    <br>
    
    <VerProductos></VerProductos>
    <br>
    <br>
  </div>
</template>

<script>
import Banner from '@/components/GeneralComponents/Banner.vue';
import ListaProveedores from '@/components/ProveedoresComponents/ListaProveedores.vue';
import PromocionesActivas from '@/components/ProveedoresComponents/PromocionesActivas.vue';
import VerProductos from '@/components/ProveedoresComponents/VerProductos.vue';

export default {
    name: 'ProveedoresView',
    components: {
        Banner,
        ListaProveedores,
        VerProductos,
        PromocionesActivas
    },

}
</script>

<style>

</style>