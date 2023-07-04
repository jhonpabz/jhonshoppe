<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->

        <slot />
      </div>
      <div class="drawer-side">
        <div for="my-drawer-2 " class="pl-8 pt-8 flex">
          <IconsFilter class="mt-1" />
          <span class="font-bold">FILTERS</span>
        </div>

        <ul class="menu p-4 w-72 h-full text-base-content">
          <!-- Sidebar content here -->
          <SidebarSearch />
          <li v-for="category in categories" :key="category">
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text w-32">{{
                  category.charAt(0).toUpperCase() + category.slice(1)
                }}</span>
                <input
                  :name="category"
                  :id="category"
                  v-model="selectedCategories"
                  type="checkbox"
                  :value="category"
                  class="checkbox checkbox-info"
                />
              </label>
            </div>
          </li>
          <div class="mt-8">
            <SidebarSort />
            <SidebarSortByPrice />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
const { data: products } = await useFetch("/api/products");
const { data: categoriesFromApi } = await useFetch("/api/categories");

const categories = useCategories();
const selectedCategories = useSelectedCategories();
const filteredProducts = useFilteredProducts();
const prds = useProducts();

watchEffect(() => {
  if (filteredProducts.value) {
    prds.value = products;
  }
});

watchEffect(() => {
  const filtered = products?.value?.filter(
    (p) => selectedCategories.value.indexOf(p.category) !== -1
  );

  filteredProducts.value = filtered;
});

watchEffect(() => {
  if (categoriesFromApi.value) {
    categories.value = categoriesFromApi.value;
  }
});
</script>

<style lang="scss" scoped></style>
