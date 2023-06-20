<template>
  <form>
    <div class="mb-3">
      <label for="date" class="form-label">Дата</label>
      <input type="date" class="form-control" id="date" v-model="day">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Описание</label>
      <textarea class="form-control" id="description" rows="3"></textarea>
    </div>
  </form>
</template>

<script setup>
  import {ref} from "vue";
  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }

  const props = defineProps(['day']);
  const data = new Date(props.day);
  const day=ref(addZero(data.getFullYear()) + '-' +
      addZero(data.getMonth() + 1) + '-' +
      addZero(data.getDate()))
</script>

<style scoped>
   form {
     max-width: 30rem;
     margin-right: auto;
     margin-left: auto;
   }
</style>
