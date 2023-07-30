<template>
  <div class="main-container">
    <div class="form-check plusmargin">
      <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="storeTask.filter">
      <label class="form-check-label" for="flexCheckDefault">
        только неисполненные
      </label>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="oneTask in storeTask.todosToShow()">
        <div class="taskContainer">
          <input type="checkbox" v-model="oneTask.isCompleted" @change="storeTask.updateLocalStorage"/>
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
  grid-template-columns: 1.5fr 3fr 4fr;
}
.main-container {
  max-width: 30rem;
  margin-right: auto;
  margin-left: auto;
}
.plusmargin {
  margin: 1rem;
}
</style>
