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

<style lang="scss" scoped>
$logo-width: 200px;
$logo-height: 200px;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  text-align: center;
}

.logo {
  img {
    width: $logo-width;
    height: $logo-height;
    object-fit: contain;
  }
}

.btnBack {
  margin-bottom: 20px;
}
</style>