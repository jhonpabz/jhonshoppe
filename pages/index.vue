<script setup>
const { data: products } = useAppFetch("getProducts");
const filteredProducts = useFilteredProducts();
</script>

<template>
  <div class="relative bg-cover electronics-bg overflow-hidden">
    <div class="z-50 absolute inset-y-2/4 inset-x-2/4">
      <div class="flex flex-col items-center justify-center">
        <p class="text-7xl text-white w-max">Shop Now!</p>
        <NuxtLink
          to="/products/electronics"
          class="btn btn-active bg-green border-green w-48 mt-8 rounded-3xl text-base"
        >
          Shop Electronics
        </NuxtLink>
      </div>
    </div>
    <img
      src="~/assets/img/electronics.jpg"
      alt="Electronics"
      class="brightness-75"
    />
  </div>

  <Carousel />

  <div class="my-14">
    <Header />
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

<style scoped>
.electronics-bg {
  height: calc(100vh - 65px);
}
</style>
