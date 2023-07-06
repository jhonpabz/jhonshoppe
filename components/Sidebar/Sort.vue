<template>
  <div class="dropdown dropdown-hover ml-4">
    <label tabindex="0" class="underline m-1 flex text-base"
      >Sort by <IconsDropdown class="text-xl"
    /></label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
    >
      <li @click="handleSortAlphabetically"><a>Alphabetically</a></li>
    </ul>
  </div>
</template>

<script setup>
const { data: products } = await useAppFetch("getProducts");
const filteredProducts = useFilteredProducts();

const handleSortAlphabetically = () => {
  const sortByName = products.value.sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  filteredProducts.value = sortByName;
};
</script>
