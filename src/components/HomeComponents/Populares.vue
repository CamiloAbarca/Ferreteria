<template>
    <div class="populares">
        <div v-for="(producto, index) in productosAleatorios" :key="index">
            <b-card :title="producto.nombre" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                    {{ producto.descripcion }} - Precio: ${{ producto.precio }}
                </b-card-text>
                <b-button to="/" variant="primary">Ver más</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PopularesComponent',
    computed: {
        ...mapGetters(['getProductos']),
        productosAleatorios() {
            const productos = this.getProductos;
            if (productos.length > 0) {
                const shuffled = productos.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, 3);
            }
            return [];
        }
    }
}
</script>

<style scoped>
.populares {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
    border: 2px solid #007BFF;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
}
</style>