<template>
  <div class="main-container">
    <ul class="list-group">
      <li class="list-group-item" v-for="oneTask in storeTask.tasks">
        <div class="taskContainer">
          <div>
            <input type="checkbox" v-model="oneTask.isCompleted"/>
          </div>
          <div>
            {{
              oneTask.date.toLocaleString('default', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              })
            }}
            {{ oneTask.time }}
          </div>
          <div>{{ oneTask.description }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

const storeTask = useTasksStore();
</script>

<style scoped>
.taskContainer {
  display: grid;
  grid-template-columns: 1fr 3fr 4fr;
}
.main-container {
  max-width: 30rem;
  margin-right: auto;
  margin-left: auto;
}
</style>
