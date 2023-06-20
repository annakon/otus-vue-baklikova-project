import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import ListView from '../components/ListView.vue'
import DayView from '../components/DayView.vue'
import addTask from '../components/addTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/day/:day/:month/:year',
      name: 'day',
      props: true,
      component: DayView
    },
    {
      path: '/add/:day',
      name: 'add',
      props: true,
      component: addTask
    }
  ]
})

export default router
