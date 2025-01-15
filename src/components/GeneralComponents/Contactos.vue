<template>
    <div class="banner">
        <div class="rrss">
            <h4>Redes Sociales</h4>
            <a :href="informaciones.informacionGeneral.redesSociales.facebook"><b-icon icon="facebook"></b-icon></a>
            <a :href="informaciones.informacionGeneral.redesSociales.twitter"><b-icon icon="twitter"></b-icon></a>
            <a :href="informaciones.informacionGeneral.redesSociales.instagram"><b-icon icon="instagram"></b-icon></a>
        </div>
        <div class="info">
            <h4>Contacto</h4>
            <p><strong>Dirección: </strong>{{ informaciones.informacionGeneral.direccion }}</p>
            <p><strong>Teléfono: </strong>{{ informaciones.informacionGeneral.telefono }}</p>
            <p><strong>Correo Electrónico: </strong><a :href="'mailto:' + informaciones.informacionGeneral.correoElectronico">{{
                informaciones.informacionGeneral.correoElectronico }}</a></p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'ContactosComponent',
    computed: {
        ...mapGetters(["getInformacion"]),
        informaciones() {
            return this.getInformacion;
        }
    },
    created() {
        this.$store.dispatch('fetchInformacion');
    }
}
</script>

<style scoped>
.banner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: auto;
    height: auto;
    background-color: #ffffff;
    border: 2px solid #007BFF;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
}

.info,
.rrss {
    font-size: 1vw;
    text-align: center;
}

a{
    margin: 5px;
}
</style>