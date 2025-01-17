<template>
  <b-card class="cardConfirmacion" header="CONFIRMACIÓN" header-tag="header" title="Felicidades!">
    <b-card-text>{{ mensaje }}</b-card-text>
    <div class="btnBack">
      <b-button type="link" variant="dark" to="/login">Regresar al Login</b-button>
    </div>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ConfirmacionRegistroComponent',
  computed: {
    ...mapGetters(["getRespuesta"]),
    mensaje() {
      return this.getRespuesta.mensaje || "No se recibió mensaje de confirmación.";
    }
  }
}
</script>

<style scoped>
.cardConfirmacion {
  width: 500px;
  text-align: left;
}

.btnBack {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>