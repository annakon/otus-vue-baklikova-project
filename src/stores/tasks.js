import {reactive, ref} from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('task', () => {
  const tasks = reactive([]);
  const filter = ref(false)
  function todosToShow() {
    tasks.sort((a,b)=>new Date(a.date.toDateString()+" "+a.time)-new Date(b.date.toDateString()+" "+b.time));
    return filter.value? tasks.filter(t => !t.isCompleted) : tasks;
  }

  function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function updateTasksFromLocalStorage() {
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

  return { tasks, filter, addToTasks, findByDate, updateCartFromLocalStorage: updateTasksFromLocalStorage, updateLocalStorage, todosToShow };
});
