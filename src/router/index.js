import { createRouter, createWebHistory } from 'vue-router'
import App1 from '../App1.vue'
import App2 from '../App2.vue'
import App3 from '../App3.vue'
import App4 from '../App4.vue'
import App5 from '../App5.vue'

const routes = [
  { path: '/', component: App1 },
  { path: '/home', component: App1 },
  { path: '/about', component: App2 },
  { path: '/contact', component: App3 },
  { path: '/education', component: App4 },
  { path: '/skills', component: App5 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router