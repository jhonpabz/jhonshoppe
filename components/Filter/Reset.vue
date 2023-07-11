<template>
  <div>
    <div for="my-drawer " class="mb-3 flex mt-2">
      <button @click="handleReset" class="btn btn-ghost btn-xs ml-3">
        Reset Filter
        <IconsClear class="text-base" />
      </button>
    </div>
  </div>
</template>

<script setup>
const filteredProducts = useFilteredProducts();
const searchQuery = useSearchQuery();
const selectedCategory = useSelectedCategory();
const handleReset = () => {
  filteredProducts.value = [];
  searchQuery.value = "";
  selectedCategory.value = "Select Category";
};
</script>

<style scoped></style>
