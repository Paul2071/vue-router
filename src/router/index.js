import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import Paints from "../views/paints/Paints.vue"
import PaintDetails from "../views/paints/PaintDetails.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/paint',
    name: 'paints',
    component: Paints
  },
  {
    path: '/paintdetails/:id',
    name: 'PaintDetails',
    component: PaintDetails
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
