<template>
    <div class="productos">
        <div class="header">
            <div class="titulo">
                <h1>Listado de Proveedores</h1>
            </div>
        </div>

        <div class="listProductos">
            <b-table striped hover :items="proveedores" :fields="fields" sticky-header></b-table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ListadoProveedoresComponent",
    computed: {
        ...mapGetters(["getProveedores"]),
        proveedores() {
            return this.getProveedores.map((proveedor) => ({
                nombre: proveedor.nombre,
                contacto: proveedor.contacto,
                telefono: proveedor.telefono,
                direccion: proveedor.direccion,
            }));
        },
        fields() {
            return [
                { key: "nombre", label: "Nombre" },
                { key: "contacto", label: "Contacto" },
                { key: "telefono", label: "Teléfono" },
                { key: "direccion", label: "Dirección" },
            ];
        },
    },
    created() {
        this.$store.dispatch('fetchServicios');
    }
};
</script>

<style scoped>
.productos {
    width: auto;
    height: auto;
    background-color: #ffffff;
    border: 2px solid #007bff;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.titulo {
    flex: 1;
}

.listProductos {
    margin-top: 20px;
    max-height: 400px;
    overflow-y: auto;
}
</style>