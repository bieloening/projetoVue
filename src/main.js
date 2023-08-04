import Vue from 'vue';
import App from './App.vue';
import Login from './components/Login.vue'; // Supondo que o componente Login está em um arquivo separado chamado Login.vue

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
