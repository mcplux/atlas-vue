import { createRouter, createWebHistory } from 'vue-router'
import CountriesView from '../views/CountriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'countries' },
    },
    {
      path: '/countries',
      name: 'countries',
      component: CountriesView,
    },
  ],
})

export default router
