<template>
  <div class="text-left">
    <div class="text-4xl my-4 font-bold">Your cart</div>
    <div class="flex flex-row items-center space-x-64 border-b">
      <div>Product</div>
      <div class="w-80 content-center"></div>

      <div class="text-lg">Quantity</div>
    </div>

    <div v-for="item in cartItems" :key="item.id">
      <div class="flex flex-row items-center space-x-64">
        <div class="w-36">
          <img
            :src="item.image"
            alt="product img"
            class="mx-auto my-7 h-36 w-auto"
          />
        </div>
        <div class="w-72 content-center">
          <h1 class="font-bold">{{ item.title }}</h1>
          <span> ${{ item.price }}</span>
        </div>

        <div class="text-lg">
          {{ item.quantity }}
        </div>
        <button @click="handleRemoveItem(item.id)" class="btn btn-ghost">
          <IconsDelete class="text-2xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCart();
const cartItems = useCookie("cart");
const { cartItemDeleted } = useAlert();
const route = useRouter();

const handleRemoveItem = (id) => {
  cart.removeToCart(id);
  cartItemDeleted();
  route.go(0);
};
</script>

<style scoped></style>
