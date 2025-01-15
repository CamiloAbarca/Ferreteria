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
    </div>
</template>

<script>
export default {
    name: 'FormLoginComponent',
    data() {
        return {
            email: '',
            password: '',
            emailState: null,
            passwordState: null,
        };
    },
    methods: {
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailState = emailPattern.test(this.email) ? true : false;
        },
        handleLogin() {
            this.emailState = this.email ? this.emailState : false;
            this.passwordState = this.password ? true : false;

            if (this.emailState && this.passwordState) {
                // Aquí puedes manejar el inicio de sesión
                console.log('Iniciando sesión con:', this.email, this.password);
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