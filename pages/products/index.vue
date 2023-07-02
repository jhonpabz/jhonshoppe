<script setup>
useHead({
  title: 'JHONSHOPPE - Products',
  meta: [{ name: 'description', content: 'Nuxt 3 Ecommerce' }],
});

// const { data: products } = await useFetch("https://fakestoreapi.com/products");
const { data: products, status } = await useGetProducts();

console.log('status: ', status.value);
const handleClick = () => {
  console.log('ENV: ', process.env.API_BASE_URL);
};
</script>

<template>
  <button @click="handleClick" class="btn btn-outline">TEST ENV</button>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
