<template>
  <NuxtLayout name="custom">
    <div>Cart Page</div>
    <div v-for="item in cartItems" :key="item.id">{{ item.title }}</div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
const cartItems = useCartIems();
</script>

<style scoped></style>
