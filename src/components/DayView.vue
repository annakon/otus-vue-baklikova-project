<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ shortdate }}</h5>
    </div>
    <div v-for="oneTask in taskDay">
      {{ oneTask.time }}
    </div>
    <router-link :to="{ name: 'add', params: { day: date } }" class="btn btn-primary">
      Добавить задачу
    </router-link>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

const props = defineProps(['day', 'month', 'year']);
const date = new Date(props.year, props.month, props.day);
const shortdate = date.toLocaleString('default', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const storeTask = useTasksStore();
const taskDay = storeTask.findByDate(date);
</script>

<style scoped>
.card {
  max-width: 36rem;
  margin-right: auto;
  margin-left: auto;
}
h5 {
  text-align: center;
}
</style>
