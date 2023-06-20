<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ shortdate }}</h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['day', 'month', 'year'])
const date = new Date(props.year, props.month, props.day)
const shortdate = date.toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<style scoped>
.card {
  max-width: 36rem;
  margin-right: auto;
  margin-left: auto;
}
h5 {
  text-align: center;
}
</style>
