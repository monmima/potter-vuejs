import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Character.vue'
import Characters from '../views/Characters.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters/',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character
  },
  {
    path: '/staff-members',
    name: 'StaffMembers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StaffMembers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
