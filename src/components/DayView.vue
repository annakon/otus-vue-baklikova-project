<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{shortdate}}</h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['date']);
const date=new Date(props.date);
const  shortdate=date.toLocaleString('default',{year: "numeric", month: "long", day: "numeric",});
</script>

<style scoped>

</style>
