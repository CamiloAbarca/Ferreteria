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
            label="Dirección:" label-for="input-horizontal" :state="direccionState"
            invalid-feedback="La dirección es obligatorio.">
            <b-form-input id="direccion" type="text" v-model="direccion" :state="direccionState"></b-form-input>
        </b-form-group>

        <br>

        <div>
            <b-button type="submit" variant="primary" @click="handleRegister">Registrarme</b-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'FormRegisterComponent',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            direccion: '',
            nameState: null,
            emailState: null,
            phoneState: null,
            direccionState: null
        };
    },
    methods: {
        ...mapActions(['fetchRespuesta']),
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailState = emailPattern.test(this.email) ? true : false;
        },
        validatePhone() {
            const phonePattern = /^\d{9}$/;
            this.phoneState = phonePattern.test(this.phone) ? true : false;
        },
        async handleRegister() {
            this.nameState = this.name ? true : false;
            this.emailState = this.email ? this.emailState : false;
            this.phoneState = this.phone ? this.phoneState : false;
            this.direccionState = this.direccion ? true : false;

            if (this.nameState && this.emailState && this.phoneState && this.direccionState) {
                console.log('Registrando proveedor:', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    direccion: this.direccion,
                });

                // Llama a la nueva acción para registrar el proveedor
                await this.$store.dispatch('fetchRegistroProveedor', {
                    nombre: this.name,
                    email: this.email,
                    telefono: this.phone,
                    direccion: this.direccion,
                });

                this.$router.push({ path: '/confirmacionProveedor' });
                this.resetForm();
            } else {
                // Manejo de errores
                if (!this.name) {
                    this.nameState = false;
                }
                if (!this.email) {
                    this.emailState = false;
                }
                if (!this.phone) {
                    this.phoneState = false;
                }
                if (!this.direccion) {
                    this.direccionState = false;
                }
            }
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.phone = '';
            this.direccion = '';
            this.nameState = null;
            this.emailState = null;
            this.phoneState = null;
            this.direccionState = null;
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