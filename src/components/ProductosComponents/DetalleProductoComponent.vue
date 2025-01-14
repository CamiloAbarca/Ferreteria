<template>
  <div class="productos">
    <div class="header">
      <div class="titulo">
        <h1>Detalle Producto</h1>
      </div>

      <div class="btnBack">
        <b-button type="link" variant="danger" to="/productos">Regresar al Listado de Producto</b-button>
      </div>
    </div>

    <div class="detalleProducto" v-if="producto">
      <b-card :title="producto.nombre">
        <br>
        <b-card-text>
          <strong>Categoría:</strong> {{ producto.categoria }}
        </b-card-text>
        <b-card-text>
          <strong>Descripción:</strong>
          {{ producto.descripcion || "No disponible" }}
        </b-card-text>
        <b-card-text>
          <strong>Precio:</strong>
          ${{ producto.precio || "No disponible" }}
        </b-card-text>
        <b-card-text>
          <strong>Stock:</strong>
          {{ producto.stock || "No disponible" }} Unidades
        </b-card-text>
      </b-card>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetalleProductoComponent",
  data() {
    return {
      producto: null,
    };
  },
  computed: {
    ...mapGetters(["getProductos"]),
  },
  created() {
    this.$store.dispatch("fetchProductos").then(() => {
      const id = this.$route.params.id;
      this.producto = this.getProductos.find((producto) => producto.id === id);

      if (!this.producto) {
        this.$router.push({ name: "listadoProductos" });
        alert("Producto no encontrado");
      }
    });
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

.detalleProducto {
  margin-top: 20px;
}
</style>
