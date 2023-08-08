<template>
  <div id="app">
    <!-- Use o componente de login aqui -->
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'; // Importa o componente de login

export default {
  components: {
    Login, // Registra o componente de login para poder utilizá-lo
  },
};
</script>

<style>
/* Estilos gerais aqui */
</style>

