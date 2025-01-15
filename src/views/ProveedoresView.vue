<template>
  <div>
    <Banner></Banner>
    <ListaProveedores></ListaProveedores>
    <PromocionesActivas></PromocionesActivas>
    <VerProductos></VerProductos>
    <Contactos></Contactos>
  </div>
</template>

<script>
import Banner from '@/components/GeneralComponents/Banner.vue';
import ListaProveedores from '@/components/ProveedoresComponents/ListaProveedores.vue';
import PromocionesActivas from '@/components/ProveedoresComponents/PromocionesActivas.vue';
import VerProductos from '@/components/ProveedoresComponents/VerProductos.vue';
import Contactos from '@/components/GeneralComponents/Contactos.vue';

export default {
    name: 'ProveedoresView',
    components: {
        Banner,
        ListaProveedores,
        VerProductos,
        PromocionesActivas,
        Contactos
    },

}
</script>

<style>

</style>