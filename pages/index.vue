<script setup>
const { data: products } = await useAppFetch("getProducts");
const filteredProducts = useFilteredProducts();
</script>

<template>
  <HeaderMasthead />
  <Carousel />

  <div class="my-14">
    <Header />
    <Filter />
    <div
      v-if="filteredProducts?.length"
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 mt-8"
    >
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>

    <div
      v-else
      class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 mt-8"
    >
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
