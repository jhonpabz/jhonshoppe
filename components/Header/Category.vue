<template>
  <div class="text-5xl font-bold">{{ title }}</div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped></style>
