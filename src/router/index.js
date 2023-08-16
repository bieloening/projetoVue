import { createRouter, createWebHistory } from 'vue-router';
import EmptyPage from '../components/EmptyPage.vue';
import Login from '../components/Login.vue'

const routes = [
  { path: '/', component: EmptyPage }, 
  { path: '/login', component: Login},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
