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
        ...mapActions(['fetchRegistroProveedor']),
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailState = emailPattern.test(this.email);
            return this.emailState;
        },
        validatePhone() {
            const phonePattern = /^\d{9}$/;
            this.phoneState = phonePattern.test(this.phone);
            return this.phoneState;
        },
        async handleRegister() {
            this.nameState = !!this.name;
            this.emailState = this.validateEmail();
            this.phoneState = this.validatePhone();
            this.direccionState = !!this.direccion;

            
            if (this.nameState && this.emailState && this.phoneState && this.direccionState) {
                const nuevoProveedor = {
                    nombre: this.name,
                    contacto: this.email,
                    telefono: this.phone,
                    direccion: this.direccion,
                };

                await this.fetchRegistroProveedor(nuevoProveedor);

                this.$router.push({ path: '/confirmacionProveedor' });
                this.resetForm();
            } else {
                console.error("Por favor, completa todos los campos correctamente.");
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