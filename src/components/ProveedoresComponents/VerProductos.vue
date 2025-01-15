<template>
  <div class="box">
        <h1>Listado de Productos</h1>
        <b-button class="btn" type="link" variant="primary" to="/productos">VER LISTADO DE PRODUCTOS</b-button>
  </div>
</template>

<script>
export default {
    name: 'verProductosComponent'

}
</script>

<style scoped>
.box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: auto;
    height: 200px;
    background-color: #f0f0f0;
    padding: 20px;
    margin: 20px;
}

.btn {
    width: 200px;
}

</style>