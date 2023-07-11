<template>
  <div class="ml-4">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        v-model="searchQuery"
        id="simple-search"
        class="bg-gray-50 border border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
      />
    </div>
  </div>
</template>

<script setup>
import { watch, watchEffect } from "vue";
const { data: products } = await useAppFetch("getProducts");

const filteredProducts = useFilteredProducts();
const searchQuery = useSearchQuery();

watch(searchQuery, () => {
  if (searchQuery.value !== "") {
    const filterByName = products.value.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );

    filteredProducts.value = filterByName;
  }
});

watchEffect(() => {
  if (searchQuery.value === "") {
    filteredProducts.value = [];
  }
});
</script>

<style scoped></style>
