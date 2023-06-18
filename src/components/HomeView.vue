<template>
  <h1>{{month}}</h1>
</template>

<script setup>
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
