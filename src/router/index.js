import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFoundView.vue'
import RegistroView from '@/views/RegistroView.vue'
import ProductosView from '@/views/ProductosView.vue'

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
    path: '/productos',
    name: 'productos',
    component: ProductosView
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


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
