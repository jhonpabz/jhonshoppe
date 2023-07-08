<template>
  <select
    v-model="selectedCategory"
    class="select select-bordered select-sm ml-4"
  >
    <option disabled selected>Select Category</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </option>
  </select>
</template>

<script setup>
import { ref, watchEffect, watch } from "vue";

const selectedCategory = ref("Select Category");
const { data: categories } = await useAppFetch("getCategories");
const filteredProducts = useFilteredProducts();
const headerTitle = useHeaderTitle();

watch(selectedCategory, async () => {
  const { data: productsCategory } = await useAppFetch(
    "getCategory",
    selectedCategory.value
  );

  if (productsCategory) {
    filteredProducts.value = productsCategory.value;
    headerTitle.value =
      selectedCategory.value.charAt(0).toUpperCase() +
      selectedCategory.value.slice(1);
  }
});
</script>
