<template>
    <div class="promosActivas">
        <h1>Promociones Activas</h1>
        <div class="promociones">
            <b-card v-for="(promocion, index) in promociones" :key="index" :header="'Promoción ' + (index + 1)"
                class="mb-3">
                <b-card-text>
                    {{ promocion.descripcion }}
                </b-card-text>
                <b-card-text>
                    Válido desde: {{ promocion.fechaInicio }} - Hasta: {{ promocion.fechaFin }}
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'PromocionesActivasComponent',
    computed: {
        ...mapGetters(["getPromociones"]),
        promociones() {
            return this.getPromociones;
        }
    },
    created() {
        this.$store.dispatch('fetchPromociones');
    }
}
</script>

<style scoped>
.promosActivas {
    width: auto;
    height: auto;
    background-color: #ffffff;
    border: 2px solid #007BFF;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
}

.promociones {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

.b-card {
    flex: 1 1 200px;
    max-width: 300px;
    margin: 10px;
}
</style>