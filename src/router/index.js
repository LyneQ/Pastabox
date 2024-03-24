import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import FormView from "@/views/FormView.vue";
import Watcher from "@/views/Watcher.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/Form',
      name: 'form',
      component: FormView
    },
    {
      path: '/watcher',
      name: 'watcher',
      component: Watcher
    }
  ]
})

export default router
