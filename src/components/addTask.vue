<template>
  <form>
    <div class="mb-3">
      <label for="date" class="form-label">Дата</label>
      <input type="datetime-local" class="form-control" id="date" v-model="day">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Описание</label>
      <textarea class="form-control" id="description" rows="3"></textarea>
    </div>
  </form>
</template>

<script setup>
  import {ref} from "vue";

  const props = defineProps(['day']);
  const day=ref(props.day)
</script>

<style scoped>
   form {
     max-width: 30rem;
     margin-right: auto;
     margin-left: auto;
   }
</style>
