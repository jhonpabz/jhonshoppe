<template>
  <div class="dropdown dropdown-hover ml-4">
    <label tabindex="0" class="underline m-1 flex text-base"
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
const filteredProducts = useFilteredProducts();
const prds = useProducts();

const sortByPriceLowToHigh = () => {
  if (filteredProducts.value.length) {
    const sortByPrice = filteredProducts.value.sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
    filteredProducts.value = sortByPrice;
  } else {
    const sortByPrice = prds.value.sort((a, b) => (a.price > b.price ? 1 : -1));

    prds.value = sortByPrice;
  }
};

const sortByPriceHighToLow = () => {
  if (filteredProducts.value.length) {
    const sortByPrice = filteredProducts.value.sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
    filteredProducts.value = sortByPrice;
  } else {
    const sortByPrice = prds.value.sort((b, a) => (a.price > b.price ? 1 : -1));

    prds.value = sortByPrice;
  }
};
</script>
