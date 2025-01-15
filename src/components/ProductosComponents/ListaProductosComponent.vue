<template>
  <div class="productos">
    <div class="header">
      <div class="titulo">
        <h1>Listado de Productos</h1>
      </div>

      <div class="btnBack">
        <b-button type="link" variant="dark" to="/">Regresar al Home</b-button>
      </div>
    </div>

    <div class="listProductos">
      <b-table striped hover :items="productos" :fields="fields" sticky-header @row-clicked="verDetalle"></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListadoComponent",
  computed: {
    ...mapGetters(["getProductos"]),
    productos() {
      return this.getProductos.map((producto) => ({
        id: producto.id,
        nombre: producto.nombre,
        categoria: producto.categoria,
      }));
    },
    fields() {
      return [
        { key: "nombre", label: "Nombre" },
        { key: "categoria", label: "Categoría" },
      ];
    },
  },
  methods: {
    verDetalle(item) {
      this.$router.push({ name: "detalleProducto", params: { id: item.id } });
    },
  },
  created() {
    this.$store.dispatch("fetchProductos");
  },
};
</script>

<style scoped>
.productos {
  width: auto;
  height: auto;
  background-color: #f0f0f0;
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

.btnBack {
  margin-left: 20px;
}

.listProductos {
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
}
</style>