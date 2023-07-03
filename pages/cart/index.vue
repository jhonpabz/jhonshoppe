<template>
  <div>Cart Page</div>
  <div v-for="item in cartItems" :key="item.id">{{ item.title }}</div>
</template>

<script setup>
const cartItems = useCartIems();
</script>

<style scoped></style>
