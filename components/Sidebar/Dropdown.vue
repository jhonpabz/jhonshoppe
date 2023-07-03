<template>
  <div class="dropdown dropdown-hover">
    <label tabindex="0" class="btn m-1">Sort</label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li @click="handleSortAlphabetically"><a>Alphabetically</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</template>

<script setup>
const filteredProducts = useFilteredProducts();

const prds = useProducts();

const handleSortAlphabetically = () => {
  if (filteredProducts.value.length) {
    console.log("prds.value: ", prds.value);
    const sortByName = filteredProducts.value.sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    filteredProducts.value = sortByName;
  } else {
    const sortByName = prds.value.sort((a, b) => (a.title > b.title ? 1 : -1));

    prds.value = sortByName;
  }
};
</script>
