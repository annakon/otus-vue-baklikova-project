<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <RouterLink to="/" class="btn align-middle btn-outline-dark">Календарь</RouterLink>
        <RouterLink to="/list" class="btn align-middle btn-outline-dark">Список</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  max-width: 15rem;
  margin: 2rem auto;
}
.container-fluid {
  justify-content: center;
}
.btn {
  border-radius: unset;
}
</style>
