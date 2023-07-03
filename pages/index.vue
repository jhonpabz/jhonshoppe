<script setup>
// const { data: products } = await useFetch("https://fakestoreapi.com/products");
// const { data: products, status } = await useGetProducts();
const prds = useProducts();
const filteredProducts = useFilteredProducts();
</script>

<template>
  <div>
    <div v-if="filteredProducts.length" class="grid grid-cols-3 gap-5">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    <div
      v-else
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"
    >
      <div v-for="product in prds" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
