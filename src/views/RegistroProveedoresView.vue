<template>
  <div class="container">
    <div class="content">
      <br>
      <div class="btnBack">
        <b-button type="link" variant="dark" to="/">Regresar al Home</b-button>
      </div>

      <div class="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/819/815/non_2x/letter-d-p-with-bolt-screw-hammer-logo-icon-vector.jpg"
          alt="">
      </div>
      <br>
      <br>
      <br>

      <Form></Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/ProveedoresComponents/FormRegister.vue';

export default {
  name: 'RegistroProveedoresView',
  components: {
    Form
  }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}

img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>