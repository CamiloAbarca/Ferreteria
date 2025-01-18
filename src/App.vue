<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <Contactos></Contactos>
  </div>
</template>

<script>
import Contactos from './components/GeneralComponents/Contactos.vue';
import NavBar from './components/GeneralComponents/NavBar.vue';
import '@/scss/style.scss'

export default {
  name: 'App',
  components: {
    NavBar,
    Contactos
  }
}
</script>

<style lang="scss">

</style>