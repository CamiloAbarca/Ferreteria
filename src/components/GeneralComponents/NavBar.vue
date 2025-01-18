<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <img class="imgLogo"
                src="https://static.vecteezy.com/system/resources/previews/007/819/815/non_2x/letter-d-p-with-bolt-screw-hammer-logo-icon-vector.jpg"
                alt="logo">
            <b-navbar-brand href="#">El Tornillo Perdido</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <div v-if="isLoggedIn">
                        <h4>|</h4>
                    </div>
                    <b-nav-item v-if="isLoggedIn" to="/proveedores">Proveedores</b-nav-item>
                    <b-nav-item v-if="isLoggedIn" to="/registroProveedores">Registro Proveedores</b-nav-item>
                    <div>
                        <h4>|</h4>
                    </div>
                    <b-nav-item to="/productos">Productos</b-nav-item>
                    <div>
                        <h4>|</h4>
                    </div>
                    <b-nav-item v-if="!isLoggedIn" to="/login">Login</b-nav-item>
                    <b-nav-item to="/registro">Registro</b-nav-item>
                    <b-nav-item v-if="isLoggedIn" @click="handleLogout">Cerrar Sesión</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NavBarComponent',
    computed: {
        ...mapGetters(['getLogin']),
        isLoggedIn() {
            return this.getLogin !== false;
        }
    },
    methods: {
        ...mapActions(['logout']),
        handleLogout() {
            this.logout();
        }
    }
}
</script>

<style scoped>
.imgLogo {
    width: 50px;
    margin-left: 5px;
    margin-right: 10px;
    border-radius: 25px;
}
</style>