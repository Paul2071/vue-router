import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import Paints from "../views/paints/Paints.vue"
import PaintDetails from "../views/paints/PaintDetails.vue"
import NotFound from "../views/paints/NotFound.vue"

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
    component: PaintDetails,
    props: true
  },
  {
    path: '/all-paints',
    redirect: 'paint'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
