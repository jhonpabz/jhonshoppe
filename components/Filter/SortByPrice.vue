<template>
  <div class="dropdown dropdown-hover ml-4">
    <label tabindex="0" class="m-1 flex text-sm font-semibold mt-3"
      >Sort by Price
      <IconsDropdown class="text-xl" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
    >
      <li @click="sortByPriceLowToHigh" class="z-20"><a>Low to High</a></li>
      <li @click="sortByPriceHighToLow" class="z-20"><a>High to Low</a></li>
    </ul>
  </div>
</template>

<script setup>
const { data: products } = await useAppFetch("getProducts");
const filteredProducts = useFilteredProducts();
const selectedCategory = useSelectedCategory();

const sortByPriceLowToHigh = () => {
  const sortByPrice = products.value.sort((a, b) =>
    a.price > b.price ? 1 : -1
  );
  filteredProducts.value = sortByPrice;
  selectedCategory.value = "Select Category";
};

const sortByPriceHighToLow = () => {
  const sortByPrice = products.value.sort((a, b) =>
    a.price < b.price ? 1 : -1
  );
  filteredProducts.value = sortByPrice;
  selectedCategory.value = "Select Category";
};
</script>
