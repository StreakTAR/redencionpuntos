import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue';
import EditarView from '../views/EditarView.vue';
import ProductoView from '../views/ProductoView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/editar/:cedula',
    name: 'EditarView',
    component: EditarView
  },
  {
    path: '/producto',
    name: 'ProductoView',
    component: ProductoView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
