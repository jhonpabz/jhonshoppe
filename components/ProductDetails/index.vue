<template>
  <div>
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img
          :src="product.image"
          alt="product img"
          class="mx-auto my-7 max-w-md"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price: ${{ product.price }}</p>
        <h3 class="font-bold border-b mb-4 pb-2">Product Description:</h3>
        <p class="mb-7">{{ product.description }}</p>

        <div class="flex mt-2">
          <ButtonQuantity />
          <button @click="cart.addProduct()" class="btn btn-success">
            <IconsCart />
            Add to cart
          </button>
        </div>
        <div>
          {{ cartValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
const cart = useCart();
const cartValue = useCookie("cart");
</script>

<style scoped></style>
