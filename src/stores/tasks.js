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

  function removeItem(item) {
    tasks.splice(item.index,1);
    updateLocalStorage();
  }

  function updateTasksFromLocalStorage() {
    const localTasks = localStorage.getItem('tasks')
    if (localTasks) {
      tasks.push(...JSON.parse(localTasks));
    }
    tasks.forEach(element=>element.date=new Date(element.date));
  }

  function addToTasks(date, time, description) {
    tasks.push({ date, time, description});
    updateLocalStorage();
  }

  function update(date, time, description, index) {
    tasks[index]={ date, time, description, index};
    updateLocalStorage();
  }

  function findByDate(date) {
    const  res=reactive([]);
    for (let i=0; i < tasks.length; i++) {
      if (tasks[i].date.toDateString() === date.toDateString()){
          res.push({...tasks[i],index: i})
      }
    }
    return res;
  }

  return { tasks, filter, update, addToTasks, findByDate, removeItem, updateCartFromLocalStorage: updateTasksFromLocalStorage, updateLocalStorage, todosToShow };
});
