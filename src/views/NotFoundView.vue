<template>
  <div>
    <img src="https://www.hostingplus.cl/wp-content/uploads/2020/12/error404quees.jpg" alt="notFound">
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>

<style lang="scss" scoped>
$border-color: #007BFF;
$border-radius: 25%;
$box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
$margin-top: 100px;

img {
  margin-top: $margin-top;
  border: 10px solid $border-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
</style>