<template>
  <div class="text-center">
    <img :src="product.image" alt="product img" class="h-auto w-auto" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <p class="font-bold text-gray-500 m-4 truncate">${{ product.price }}</p>
    <p class="text-gray-500 m-4 truncate">${{ product.description }}</p>
    <NuxtLink :to="`/products/${product.id}`"
      ><button class="btn btn-outline">View Details</button></NuxtLink
    >
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
