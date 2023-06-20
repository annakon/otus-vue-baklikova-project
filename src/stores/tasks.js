import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('task', () => {
  const tasks = reactive([]);

  function addToTasks(date, time, description) {
    tasks.push({ date, time, description });
  }

  function findByDate(date) {
    return tasks.find((i) => i.date.toDateString() === date.toDateString());
  }

  return { tasks, addToTasks, findByDate };
});
