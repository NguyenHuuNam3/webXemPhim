import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import MovieDetail from '@/components/MovieDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
