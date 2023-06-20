<template>
  <h1>{{ month + " " + year}}</h1>
  <div class="arrow" >
    <a href="#" @click="dateChange(-1);">
      <img src="../assets/sim-arrow-left.png" alt="arrow-left">
    </a>
    <a href="#" @click="dateChange(1);">
      <img src="../assets/sim-arrow-right.png" alt="arrow-right">
    </a>
  </div>
  <div class="wrapper">
    <div class="dayHeader" v-for="item in ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']">
      <h6>{{ item }}</h6>
    </div>
    <div v-for="n in otstup"></div>
    <div class="inner" v-for="n in col">
      <router-link :to="{ name: 'day', params: { day: n, month: numMonth, year: year }}">
      {{ n }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

const date = ref(new Date());
const month = computed(() =>date.value.toLocaleString('default', { month: 'long' }));
const numMonth = computed(()=>date.value.getMonth());
const year = computed(()=>date.value.getFullYear());
const col = computed(() =>new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDate());
const otstup = computed(() =>getWeekDay(new Date(date.value.getFullYear(), date.value.getMonth(), 1)));
function getWeekDay(date) {
  let days = [6, 0, 1, 2, 3, 4, 5]

  return days[date.getDay()]
}
function dateChange(num) {
  date.value=new Date(date.value.getFullYear(), date.value.getMonth() + num, date.value.getDay());
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
