<template>
  <h1>{{ month }}</h1>
  <div class="arrow">
    <router-link to="/">
      <img src="../assets/sim-arrow-left.png" alt="arrow-left">
    </router-link>
    <router-link to="/">
      <img src="../assets/sim-arrow-right.png" alt="arrow-right">
    </router-link>
  </div>
  <div class="wrapper">
    <div class="dayHeader" v-for="item in ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']">
      <h6>{{ item }}</h6>
    </div>
    <div v-for="n in otstup"></div>
    <div class="inner" v-for="n in col">{{ n }}</div>
  </div>
</template>

<script setup>
const date = new Date()
const month = date.toLocaleString('default', { month: 'long' })
const col = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
const otstup = getWeekDay(new Date(date.getFullYear(), date.getMonth(), 1))
function getWeekDay(date) {
  let days = [6, 0, 1, 2, 3, 4, 5]

  return days[date.getDay()]
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 2rem 0 2rem;
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
.arrow {
  display: flex;
  flex-wrap: nowrap;
  margin: 0 2rem 0 2rem;
  justify-content: space-between;
}
img {
  max-width: 3rem;
}
</style>
