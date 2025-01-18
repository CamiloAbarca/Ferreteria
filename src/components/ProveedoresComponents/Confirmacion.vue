<template>
  <b-card class="cardConfirmacion" header="CONFIRMACIÓN" header-tag="header" title="Felicidades!">
    <b-card-text>Proveedor registrado</b-card-text>
    <div class="btnBack">
      <b-button type="link" variant="dark" to="/">Regresar al Home</b-button>
    </div>
  </b-card>
</template>

<script>

export default {
  name: 'ConfirmacionRegistroComponent',
 
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