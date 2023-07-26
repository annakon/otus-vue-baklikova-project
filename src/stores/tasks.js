import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('task', () => {
  const tasks = reactive([]);

  function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function updateCartFromLocalStorage() {
    const localTasks = localStorage.getItem('tasks')
    if (localTasks) {
      tasks.push(...JSON.parse(localTasks));
    }
    tasks.forEach(element=>element.date=new Date(element.date));
  }

  function addToTasks(date, time, description) {
    tasks.push({ date, time, description });
    updateLocalStorage();
  }

  function findByDate(date) {
    return tasks.filter((i) => i.date.toDateString() === date.toDateString());
  }

  return { tasks, addToTasks, findByDate, updateCartFromLocalStorage };
});
