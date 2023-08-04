<template>
  <div id="app">
    <router-view /> <!-- Caso esteja usando Vue Router -->
    <Login /> <!-- Aqui está o componente de login -->
  </div>
</template>

<script>
import Login from './components/Login.vue'; // Importe o componente de login

export default {
  components: {
    Login, // Registre o componente de login para poder utilizá-lo
  },
};
</script>
