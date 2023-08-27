<template>
  <form>
    <div class="mb-3">
      <label for="date" class="form-label">Дата</label>
      <input type="date" class="form-control" id="date" v-model="dayShow" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="appt">Время</label>
      <input class="form-control" type="time" id="appt" v-model="time" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Описание</label>
      <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
    </div>
    <div class="mb-3">
      <div v-if="props.index==='-1'">
        <button @click="addTask" class="btn btn-primary" type="button">Добавить</button>
      </div>
      <div v-else>
        <button @click="addTask" class="btn btn-primary" type="button">Изменить</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasks';
import { useRouter } from 'vue-router';
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

const props = defineProps(['day','time', 'index', 'desc']);
const data = new Date(props.day);
const dayShow = ref(
  addZero(data.getFullYear()) + '-' + addZero(data.getMonth() + 1) + '-' + addZero(data.getDate())
);
const time = ref(props.time);
const description = ref(props.desc);
const storeTask = useTasksStore();
const router = useRouter();
function addTask() {
  let date = new Date(dayShow.value);
  if (props.index === "-1"){ storeTask.addToTasks(date, time.value, description.value);}
  else {storeTask.update(date, time.value, description.value, props.index);}
  router.push({
    name: 'day',
    params: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
  });
}
</script>

<style scoped>
form {
  max-width: 30rem;
  margin-right: auto;
  margin-left: auto;
}
</style>
