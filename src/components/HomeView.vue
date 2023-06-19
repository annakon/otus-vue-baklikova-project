<template>
  <h1>{{month}}</h1>
  <div class="wrapper">
    <div v-for="item in ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']">{{item}}</div>
  </div>
</template>

<script setup>
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
</script>

<style scoped>
h1{
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
