import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Contactus.vue';
import Home from '../components/WeatherApp.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;