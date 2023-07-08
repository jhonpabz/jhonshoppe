<template>
  <div>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"> </label>
        <ul class="menu p-4 w-72 h-full text-base-content bg-base-200">
          <div for="my-drawer " class="pl-4 mt-8 mb-3 pt-8 flex">
            <IconsFilter class="mt-1" />
            <span class="font-bold">FILTERS</span>
            <button @click="handleReset" class="btn btn-outline btn-xs ml-3">
              Reset Filter
              <IconsClear class="text-base" />
            </button>
          </div>
          <SidebarSearch />

          <SidebarSortByCategory />
          <div class="mt-8">
            <SidebarSort />
          </div>
          <div class="mt-8"><SidebarSortByPrice /></div>
        </ul>
      </div>
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

<style lang="scss" scoped></style>
