<script setup>
const filteredProducts = useFilteredProducts();
</script>

<template>
  <div>
    <div
      v-if="filteredProducts.length"
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-14 lg:pr-40"
    >
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    <div
      v-else
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-14 lg:pr-40"
    >
      <div v-for="product in prds" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
