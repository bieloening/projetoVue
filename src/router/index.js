import { createRouter, createWebHistory } from 'vue-router';
import EmptyPage from '../components/EmptyPage.vue'; // Importe o componente EmptyPage

const routes = [
  { path: '/', component: EmptyPage }, // Use o componente EmptyPage como rota padrão
  // Defina outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
