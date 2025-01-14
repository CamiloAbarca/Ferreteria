<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
import NavBar from './components/GeneralComponents/NavBar.vue';
//import Footer from './components/GeneralComponents/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    //Footer
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
