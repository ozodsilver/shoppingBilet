import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Registration from '../components/ForRegestration/Regestration.vue'
import Map from '../components/Map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
    path:'/',
    name:'Home',
    component:Home
},
{
path:'/reg',
component:Registration
},

{
  path:'/Map',
  component:Map
  }
  ]
})

export default router
