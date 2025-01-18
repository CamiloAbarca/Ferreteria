<template>
  <div class="container">
    <div class="content">
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/819/815/non_2x/letter-d-p-with-bolt-screw-hammer-logo-icon-vector.jpg"
        alt="logo">
      <Form></Form>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import Form from '@/components/LoginComponents/FormLogin.vue';

export default {
  name: 'LoginView',
  components: {
    Form
  },
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

img {
  width: $logo-width;
  height: $logo-height;
  object-fit: contain;
}
</style>