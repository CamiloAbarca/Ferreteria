<template>
    <div class="formulario">
        <h2>Login</h2>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Usuario:" label-for="input-horizontal" :state="emailState"
            invalid-feedback="Por favor, ingresa un email válido.">
            <b-form-input id="email" type="email" v-model="email" @input="validateEmail"
                :state="emailState"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Contraseña:" label-for="input-horizontal" :state="passwordState"
            invalid-feedback="Por favor, ingresa tu contraseña.">
            <b-form-input id="password" type="password" v-model="password" :state="passwordState"></b-form-input>
        </b-form-group>
        <br>

        <div>
            <b-button type="submit" variant="primary" @click="handleLogin">LOGIN</b-button>
        </div>
        <br>

        <div>
            <router-link to="/registro">Registrarse</router-link>
        </div>

        <div v-if="loginMessage" :class="{ 'alert': true, 'alert-success': isSuccess, 'alert-danger': !isSuccess }"
            class="mt-3">
            {{ loginMessage }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'FormLoginComponent',
    data() {
        return {
            email: '',
            password: '',
            emailState: null,
            passwordState: null,
            loginMessage: '', // Mensaje de éxito o error
            isSuccess: false, // Estado del mensaje (éxito o error)
            loginData: {} // Para almacenar los datos de login
        };
    },
    computed: {
        ...mapGetters(["getLogin"]),
    },
    created() {
        this.fetchLoginData();
    },
    methods: {
        async fetchLoginData() {
            await this.$store.dispatch('fetchLogin');
            this.loginData = this.getLogin;
        },
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailState = emailPattern.test(this.email) ? true : false;
        },
        handleLogin() {
            this.emailState = this.email ? this.emailState : false;
            this.passwordState = this.password ? true : false;

            if (this.emailState && this.passwordState) {

                if (this.email === this.loginData.correoElectronico && this.password === this.loginData.contrasena) {
                    this.loginMessage = "Login exitoso! Será redirigido al Home";
                    this.isSuccess = true;
                    this.$store.commit('SET_LOGIN', { correoElectronico: this.email });

                    setTimeout(() => {
                        this.$router.push('/');
                    }, 2000);
                } else {
                    this.loginMessage = "Credenciales incorrectas";
                    this.isSuccess = false;
                }
            } else {
                if (!this.email) {
                    this.emailState = false;
                }
                if (!this.password) {
                    this.passwordState = false;
                }
            }
        },
    },
};
</script>

<style scoped>
.formulario {
    width: 500px;
    height: auto;
    background-color: #ffffff;
    border: 2px solid #007BFF;
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin: 20px;
}
</style>