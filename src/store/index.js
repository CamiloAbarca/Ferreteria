import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: []
  },
  getters: {
    getProductos: state => state.productos
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos;
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
    }
  },
  modules: {
  }
})