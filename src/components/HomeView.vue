<template>
  <h1>{{month}}</h1>
  <div class="wrapper">
    <div class="dayHeader" v-for="item in ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']">
      <h6>{{item}}</h6>
    </div>
    <div class="inner" v-for="n in col">{{ n }} </div>
  </div>
</template>

<script setup>
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const col=howMuchDays(date.getFullYear(),date.getMonth());
function howMuchDays ( year , month) {

  let date1 = new Date(year, month-1, 1);
  let date2 = new Date(year, month, 1);
  return Math.round((date2 - date1) / 1000 / 3600 / 24);

}
</script>

<style scoped>
h1{
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 2rem;
}
.inner {
  border: 1px solid;
  text-align: center;
  padding: 1rem;
}
.dayHeader {
  border: 2px solid;
  text-align: center;
  padding: 0.5rem;
}
</style>
