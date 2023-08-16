<template>
  <div class="welcome-container">
    <h1 class="welcome-title">Welcome to My Vue App</h1>
    <button @click="goToLogin" class="login-button">Go to Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      // Redirecionar para a página de login
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.welcome-title {
  font-size: 28px;
  margin-bottom: 20px;
}

.login-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 8px 15px;
  cursor: pointer;
}
</style>
