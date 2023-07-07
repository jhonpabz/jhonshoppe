<template>
  <NuxtLink :to="`/products/${product.id}`">
    <div class="bg-white p-8 lg:w-96 w-80 border border-gray rounded-md">
      <img
        :src="product.image"
        alt="product img"
        class="overflow-hidden w-auto h-72 mx-auto"
      />
      <p class="font-semibold text-gray-950 mt-4 truncate text-2xl">
        {{ product.title }}
      </p>
      <p class="text-gray-600 mt-1 truncate">${{ product.description }}</p>
      <p class="font-bold text-gray-900 mt-3 truncate text-2xl">
        ${{ product.price }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
