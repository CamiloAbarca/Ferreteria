import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    proveedores: [],
    promociones: [], 
    informacion: [],
  },
  getters: {
    getProductos: state => state.productos,
    getProveedores: state => state.proveedores,
    getPromociones: state => state.promociones,
    getInformacion: state => state.informacion
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos;
    },
    SET_PROVEEDORES(state, proveedores) {
      state.proveedores = proveedores;
    },
    SET_PROMOCIONES(state, promociones) {
      state.promociones = promociones;
    },
    SET_INFORMACION(state, informacion) {
      state.informacion = informacion;
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

    async fetchServicios({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json');
        commit('SET_PROVEEDORES', response.data.paginaHome.proveedoresActuales);
      } catch (error) {
        console.error(`Error al obtener los servicios: ${error}`);
      }
    },

    async fetchPromociones({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json');
        commit('SET_PROMOCIONES', response.data.paginaHome.promocionesActuales);
      } catch (error) {
        console.error(`Error al obtener las promociones: ${error}`);
      }
    },
    async fetchInformacion({ commit }) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json');
        commit('SET_INFORMACION', response.data.paginaHome);
      } catch (error) {
        console.error(`Error al obtener la información: ${error}`);
      }
    }
  },
  modules: {
  }
});
