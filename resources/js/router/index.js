import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import Movies from '@/components/Movies.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
