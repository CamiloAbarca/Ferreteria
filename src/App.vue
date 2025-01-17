<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <Contactos></Contactos>
  </div>
</template>

<script>
import Contactos from './components/GeneralComponents/Contactos.vue';
import NavBar from './components/GeneralComponents/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Contactos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #007BFF;
}
</style>
