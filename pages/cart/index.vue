<template>
  <div v-if="!cartQuantity">
    <HeaderEmpty />
  </div>
  <div v-else class="text-left my-14">
    <HeaderCart />
    <div v-for="item in cartItems" :key="item.id">
      <div
        class="flex flex-row items-center lg:space-x-20 md:space-x-10 space-x-1"
      >
        <div class="lg:w-36 w-24">
          <img
            :src="item.image"
            alt="product img"
            class="mx-auto my-7 lg:h-36 w-24 w-auto"
          />
        </div>
        <div class="lg:w-72 md:w-64 w-48 content-center">
          <NuxtLink :to="goToDetailsPage(item.id)">
            <h1 class="font-bold hover:underline cursor-pointer">
              {{ item.title }}
            </h1>
          </NuxtLink>
          <span> ${{ item.price }}</span>
        </div>

        <div class="w-16">
          {{ item.quantity }}
        </div>
        <div class="w-12">
          <button @click="handleRemoveItem(item.id)" class="btn btn-ghost">
            <IconsDelete class="text-2xl text-red" />
          </button>
        </div>

        <div class="font-semibold w-12">
          ${{ totalPrice(item.quantity, item.price) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref, watchEffect } from "vue";
const cartQuantity = useCookie("cart-quantity");
const { removeToCart, totalPrice } = useCart();
const cartItems = useCookie("cart");
const { cartItemDeleted } = useAlert();
const route = useRouter();
// const grandTotalPrice = ref([]);

const handleRemoveItem = (id) => {
  removeToCart(id);
  cartItemDeleted();
  route.go(0);
};

const goToDetailsPage = (id) => {
  return `/products/${id}`;
};

// const grandTotal = () => {
//   cartItems.value.map((item) => {
//     const itemTotal = item.quantity * item.price;

//     return itemTotal;
//   });
// };

// watchEffect(() => {
//   console.log("grandTotal", grandTotal.value);

//   console.log("grandTotalPrice", grandTotalPrice.value);
// });
</script>

<style scoped></style>
