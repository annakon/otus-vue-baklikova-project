<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ shortdate }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="oneTask in taskDay">
        <div class="taskContainer">
          <div>{{ oneTask.time }}</div>
          <div>{{ oneTask.description }}</div>
        </div>
      </li>
    </ul>
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
  max-width: 24rem;
  margin-right: auto;
  margin-left: auto;
}
h5 {
  text-align: center;
}
.taskContainer {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
