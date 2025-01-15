<template>
    <div class="formulario">
        <h2>Registro</h2>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Nombre:" label-for="input-horizontal" :state="nameState"
            invalid-feedback="El nombre es obligatorio.">
            <b-form-input id="name" type="text" v-model="name" :state="nameState"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Email:" label-for="input-horizontal" :state="emailState"
            invalid-feedback="Por favor, ingresa un email válido.">
            <b-form-input id="email" type="email" v-model="email" @input="validateEmail"
                :state="emailState"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Teléfono:" label-for="input-horizontal" :state="phoneState"
            invalid-feedback="Por favor, ingresa un teléfono válido.">
            <b-form-input id="phone" type="text" v-model="phone" @input="validatePhone"
                :state="phoneState"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Contraseña:" label-for="input-horizontal" :state="passState"
            invalid-feedback="La contraseña es obligatoria.">
            <b-form-input id="pass" type="password" v-model="password" :state="passState"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="6" content-cols-sm content-cols-lg="12"
            label="Repetir Contraseña:" label-for="input-horizontal" :state="rePassState"
            invalid-feedback="Las contraseñas no coinciden.">
            <b-form-input id="rePass" type="password" v-model="rePassword" @input="validateRePassword"
                :state="rePassState"></b-form-input>
        </b-form-group>
        <br>

        <div>
            <b-button type="submit" variant="primary" @click="handleRegister">Registrarme</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormRegisterComponent',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
            rePassword: '',
            nameState: null,
            emailState: null,
            phoneState: null,
            passState: null,
            rePassState: null,
        };
    },
    methods: {
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailState = emailPattern.test(this.email) ? true : false;
        },
        validatePhone() {
            const phonePattern = /^\d{9}$/;
            this.phoneState = phonePattern.test(this.phone) ? true : false;
        },
        validateRePassword() {
            this.rePassState = this.password === this.rePassword ? true : false;
        },
        handleRegister() {
            this.nameState = this.name ? true : false;
            this.emailState = this.email ? this.emailState : false;
            this.phoneState = this.phone ? this.phoneState : false;
            this.passState = this.password ? true : false;
            this.rePassState = this.password === this.rePassword ? true : false;

            if (this.nameState && this.emailState && this.phoneState && this.passState && this.rePassState) {
                console.log('Registrando usuario:', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                });
                this.resetForm();
            } else {
                if (!this.name) {
                    this.nameState = false;
                }
                if (!this.email) {
                    this.emailState = false;
                }
                if (!this.phone) {
                    this.phoneState = false;
                }
                if (!this.password) {
                    this.passState = false;
                }
                if (this.password !== this.rePassword) {
                    this.rePassState = false;
                }
            }
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.phone = '';
            this.password = '';
            this.rePassword = '';
            this.nameState = null;
            this.emailState = null;
            this.phoneState = null;
            this.passState = null;
            this.rePassState = null;
        }
    },
};
</script>

<style scoped>
.formulario {
    width: 500px;
    height: auto;
    background-color: #ffffff;
    border: 2px solid #007BFF;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin: 20px;
}
</style>