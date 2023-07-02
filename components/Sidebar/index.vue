<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->

        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-64 h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <!-- <li><a>Sidebar Item 1</a></li> -->
          <li v-for="category in categories" :key="category">
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text w-32">{{ category }}</span>
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
          <li>
            <span>Checked : {{ selectedCategories }}</span>
          </li>
          <li><button @click="prd = checkedCategories">PROD</button></li>
          <li><button @click="handleClick">Log</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue';
const { data: products, status } = await useGetProducts();
const prd = useProducts();
const checkedCategories = ref(['TEST']);
const categories = useCategories();
const selectedCategories = useSelectedCategories();
const filteredProducts = useFilteredProducts();

watchEffect(() => {
  const f = products.value.filter(
    (p) => selectedCategories.value.indexOf(p.category) !== -1
  );

  filteredProducts.value = f;
  console.log('f', filteredProducts.value);
});

const handleClick = () => {
  // prd = 'new product';
  // console.log('products', products.value);
  console.log(prd.value);
};
</script>

<style lang="scss" scoped></style>
