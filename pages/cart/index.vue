<template>
  <div v-if="!cartQuantity" class="empty_container">
    <HeaderEmpty />
  </div>
  <div v-else class="text-left my-14 cart_container pb-14">
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

    <!-- Total Price -->
    <div class="border-t border-gray">
      <div
        class="flex flex-row items-center lg:space-x-20 md:space-x-10 space-x-1 mt-4"
      >
        <div class="lg:w-36 w-24">Grand Total</div>
        <div class="lg:w-72 md:w-64 w-48 content-center"></div>

        <div class="w-16"></div>
        <div class="w-12"></div>

        <div class="font-semibold w-12">
          <div v-if="grandTotal">${{ grandTotal.toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const cartQuantity = useCookie("cart-quantity");
const { removeToCart, totalPrice } = useCart();
const cartItems = useCookie("cart");
const { cartItemDeleted } = useAlert();
const route = useRouter();
let grandTotal = ref(0);

const handleRemoveItem = (id) => {
  removeToCart(id);
  cartItemDeleted();
  route.go(0);
};

const goToDetailsPage = (id) => {
  return `/products/${id}`;
};

for (let i = 0; i < cartItems?.value.length; i++) {
  grandTotal.value += cartItems.value[i].quantity * cartItems.value[i].price;
}
</script>

<style scoped>
.empty_container {
  min-height: calc(100vh - 310px);
}

.cart_container {
  min-height: calc(100vh - 420px);
}
</style>
