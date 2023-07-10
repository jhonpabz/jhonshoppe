<template>
  <div class="my-14">
    <HeaderCategory title="Women's Clothing" />
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 mt-8"
    >
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useAppFetch(
  "getCategory",
  "women's%20clothing"
);
</script>

<style scoped></style>
