import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    informacion: [],
    login: [],
    respuesta: []
  },
  getters: {
    getProductos: state => state.productos,
    getInformacion: state => state.informacion,
    getLogin: state => state.login,
    getRespuesta: state => state.respuesta
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos;
    },
    SET_INFORMACION(state, informacion) {
      state.informacion = informacion;
    },
    SET_LOGIN(state, login) {
      state.login = login
    },
    SET_RESPUESTA(state, respuesta) {
      state.respuesta = respuesta
    }
  },
  actions: {
    async fetchProductos({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json');
        commit('SET_PRODUCTOS', response.data.productos);
      } catch (error) {
        console.error(`Error al obtener los productos: ${error}`);
      }
    },

    async fetchInformacion({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json');
        commit('SET_INFORMACION', response.data.paginaHome);
      } catch (error) {
        console.error(`Error al obtener la información: ${error}`);
      }
    },

    async fetchLogin({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/login.json');
        commit('SET_LOGIN', response.data.login);
      } catch (error) {
        console.error(`Error login: ${error}`);
      }
    },

    async fetchRespuesta({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroresp.json');
        commit('SET_RESPUESTA', response.data.respuestaRegistro);
      } catch (error) {
        console.error(`Error registro: ${error}`);
      }
    },

    async fetchRegistroUsuario(usuario) {
      const respuesta = {
        registroUsuario: {
          nombre: usuario.nombre,
          email: usuario.email,
          password: usuario.password,
          telefono: usuario.telefono
        }
      };
      localStorage.setItem('usuarioRegistrado', JSON.stringify(respuesta.registroUsuario));
    }
  },
  modules: {
  }
});
