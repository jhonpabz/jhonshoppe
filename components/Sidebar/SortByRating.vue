<template>
  <div class="dropdown dropdown-hover">
    <label tabindex="0" class="btn m-1">Sort by Rating</label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li @click="handleSortByPrice" class="z-20"><a>Low to High</a></li>
      <li @click="handleSortByPrice2" class="z-20"><a>High to Low</a></li>
    </ul>
  </div>
</template>

<script setup>
const filteredProducts = useFilteredProducts();

const handleSortByPrice = () => {
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

const handleSortByPrice2 = () => {
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
