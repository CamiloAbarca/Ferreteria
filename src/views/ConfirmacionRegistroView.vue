<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/819/815/non_2x/letter-d-p-with-bolt-screw-hammer-logo-icon-vector.jpg"
          alt="">
      </div>

      <ConfirmacionRegistro></ConfirmacionRegistro>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
import ConfirmacionRegistro from '@/components/RegistroComponents/Confirmacion.vue';

export default {
  name: 'ConfirmacionRegistroView',
  components: {
    ConfirmacionRegistro
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
</style>