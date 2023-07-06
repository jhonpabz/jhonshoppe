<template>
  <label
    for="countries"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-4"
    >Select Category</label
  >
  <select
    v-model="selectedCategory"
    class="select select-bordered select-sm ml-4"
  >
    <option disabled selected>Select Category</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</template>

<script setup>
import { ref, watchEffect, watch } from "vue";

const selectedCategory = ref(null);
const { data: categories } = await useAppFetch("getCategories");

const filteredProducts = useFilteredProducts();

watch(selectedCategory, async () => {
  const { data: productsCategory } = await useAppFetch(
    "getCategory",
    selectedCategory.value
  );

  if (productsCategory) {
    filteredProducts.value = productsCategory.value;
  }

  console.log("filteredProducts: ", filteredProducts.value);
});
</script>
