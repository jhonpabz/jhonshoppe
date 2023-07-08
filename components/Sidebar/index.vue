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
          <div for="my-drawer " class="pl-4 mt-8 mb-2 pt-8 flex">
            <IconsFilter class="mt-1" />
            <span class="font-bold">FILTERS</span>
            <button @click="handleReset" class="btn btn-outline btn-xs ml-3">
              Reset Filter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <SidebarSearch :isReset="isReset" />

          <SidebarSortByCategory :isReset="isReset" />
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
import { ref } from "vue";
const filteredProducts = useFilteredProducts();
const isReset = ref(false);

const handleReset = () => {
  filteredProducts.value = [];
  isReset.value = true;
};
</script>

<style lang="scss" scoped></style>
