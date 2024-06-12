import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Contact from '@/components/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
