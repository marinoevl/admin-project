<script setup>

</script>

<template>
  <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh;">
    <v-card class="pa-6" color="surface">
      <h2 class="primary--text text-center mb-4">Login</h2>
      <v-text-field label="Email" type="email" variant="outlined" color="accent"></v-text-field>
      <v-text-field label="Password" type="password" variant="outlined" color="accent"></v-text-field>
      <v-btn class="mt-4" block color="primary" large>Login</v-btn>
      <v-btn text class="mt-2 highlight--text">Forgot Password?</v-btn>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>
