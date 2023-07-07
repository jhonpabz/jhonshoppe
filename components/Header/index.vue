<template>
  <div v-if="filteredProducts?.length" class="mt-14 text-5xl font-bold">
    {{ headerTitle }}
  </div>
  <div v-else class="mt-14 text-5xl font-bold">All Products</div>
</template>

<script setup>
const headerTitle = useHeaderTitle();
const filteredProducts = useFilteredProducts();
</script>

<style scoped></style>
