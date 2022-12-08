import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import FilterView from '../views/FilterView.vue'
import SingleMovieView from '../views/SingleMovieView.vue'
import AuthView from '../views/Auth.vue'
import WatchListView from '../views/WatchListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/filter',
      name: 'filter',
      component: FilterView
    },
    {
      path: '/movie/:name/:id',
      name: 'movie',
      component: SingleMovieView
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },

    {
      path: '/watch',
      name: 'watch',
      component: WatchListView
    },

  ]
})

export default router
