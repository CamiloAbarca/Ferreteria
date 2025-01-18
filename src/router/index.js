import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFoundView.vue'
import RegistroView from '@/views/RegistroView.vue'
import ProductosView from '@/views/ProductosView.vue'
import DetalleProductoView from '@/views/DetalleProductoView.vue'
import ConfirmacionRegistroView from '@/views/ConfirmacionRegistroView.vue'
import ProveedoresView from '@/views/ProveedoresView.vue'
import RegistroProveedoresView from '@/views/RegistroProveedoresView.vue'
import ConfirmacionRegistroProveedoresView from '@/views/ConfirmacionProveedoresView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/proveedores',
    name: 'proveedores',
    component: ProveedoresView
  },

  {
    path: '/registroProveedores',
    name: 'registroProveedores',
    component: RegistroProveedoresView
  },

  {
    path: '/confirmacionProveedor',
    name: 'confirmacionProveedor',
    component: ConfirmacionRegistroProveedoresView
  },

  {
    path: '/productos',
    name: 'productos',
    component: ProductosView
  },

  {
    path: '/productos/:id',
    name: 'detalleProducto',
    component: DetalleProductoView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },

  {
    path: '/confirmacion',
    name: 'confirmacion',
    component: ConfirmacionRegistroView
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
