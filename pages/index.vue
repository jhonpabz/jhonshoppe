<script setup>
const { data: products } = useAppFetch("getProducts");
const filteredProducts = useFilteredProducts();
</script>

<template>
  <div>
    <div
      v-if="filteredProducts?.length"
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-14 mt-8"
    >
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    <div
      v-else
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-14 mt-8"
    >
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
