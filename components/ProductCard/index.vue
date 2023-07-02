<template>
  <NuxtLink :to="`/products/${product.id}`">
    <div class="text-center bg-white p-6">
      <img
        :src="product.image"
        alt="product img"
        class="overflow-hidden w-auto h-96 mx-auto"
      />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <p class="font-bold text-gray-500 m-4 truncate">${{ product.price }}</p>
      <p class="text-gray-500 m-4 truncate">${{ product.description }}</p>
      <!-- <NuxtLink :to="`/products/${product.id}`"
      ><button class="btn btn-outline">View Details</button></NuxtLink
    > -->
    </div>
  </NuxtLink>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped></style>
