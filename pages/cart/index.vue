<template>
  <div v-if="!cartQuantity">
    <HeaderEmpty />
  </div>
  <div v-else class="text-left my-14">
    <div class="lg:text-4xl text-2xl my-4 font-bold">Your cart</div>
    <div
      class="flex flex-row items-center lg:space-x-20 md:space-x-10 space-x-1"
    >
      <div class="lg:w-36 w-24">Product</div>
      <div class="lg:w-72 md:w-64 w-48 content-center"></div>

      <div class="text-lg w-16">Quantity</div>
      <div class="text-lg w-12">Action</div>
      <div class="text-lg w-12">Total</div>
    </div>

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
          <h1 class="font-bold">{{ item.title }}</h1>
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
const cartQuantity = useCookie("cart-quantity");
const { removeToCart, totalPrice } = useCart();
const cartItems = useCookie("cart");
const { cartItemDeleted } = useAlert();
const route = useRouter();

const handleRemoveItem = (id) => {
  removeToCart(id);
  cartItemDeleted();
  route.go(0);
};
</script>

<style scoped></style>
