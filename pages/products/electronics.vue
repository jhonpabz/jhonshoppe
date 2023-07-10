<template>
  <div class="my-14">
    <HeaderCategory title="Electronics" />
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 mt-8"
    >
      <div v-for="product in electronics" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: electronics } = await useAppFetch("getCategory", "electronics");
</script>

<style scoped></style>
