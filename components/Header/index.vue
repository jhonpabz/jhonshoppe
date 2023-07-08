<template>
  <div
    v-if="filteredProducts?.length && headerTitle !== 'Select Category'"
    class="text-5xl font-bold"
  >
    {{ headerTitle }}
  </div>
  <div v-else class="text-5xl font-bold">All Products</div>
</template>

<script setup>
const headerTitle = useHeaderTitle();
const filteredProducts = useFilteredProducts();
</script>

<style scoped></style>
