<script setup>
// const { data: products } = await useFetch("https://fakestoreapi.com/products");
const { data: products, status } = await useGetProducts();
const filteredProducts = useFilteredProducts();
</script>

<template>
  <div>
    <div v-if="filteredProducts.length" class="grid grid-cols-4 gap-5">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    <div v-else class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
