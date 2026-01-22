import { createRouter, createWebHistory } from 'vue-router'
import CountriesView from '@/views/CountriesView.vue'

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
    {
      path: '/countries/:name',
      name: 'country',
      component: () => import('@/views/CountryView.vue'),
    },
  ],
})

export default router
