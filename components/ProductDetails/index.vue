<template>
  <div>
    <div
      class="grid lg:grid-cols- md:grid-cols-2 grid-cols-1 gap-10 lg:mx-28 md:mx-11 mx-6 mb-24"
    >
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
          <div>
            <label for="Quantity" class="sr-only"> Quantity </label>

            <div class="flex items-center border border-gray-200 rounded mr-3">
              <button
                @click="quantity--"
                type="button"
                class="w-10 h-11 leading-10 text-gray-600 transition hover:opacity-75"
              >
                &minus;
              </button>

              <input
                type="number"
                id="Quantity"
                :value="quantity"
                class="h-11 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                @click="quantity++"
                type="button"
                class="w-10 h-11 leading-10 text-gray-600 transition hover:opacity-75"
              >
                &plus;
              </button>
            </div>
          </div>
          <NuxtLink
            class="btn btn-success"
            to="/"
            :disabled="isDisabled"
            @click="handleAddToCart"
          >
            <IconsCart />
            Add to cart
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect, watch, ref } from "vue";

const { product } = defineProps(["product"]);
const cart = useCart();
const cartItems = useCookie("cart");
const { cartSuccess } = useAlert();

const quantity = ref(1);
const isDisabled = ref(null);

const handleAddToCart = () => {
  cart.addToCart(productItem());
  isDisabled.value = true;
  cartSuccess();
};

watchEffect(() => {
  const isOnTheCart = cartItems?.value?.filter(
    (item) => item.id === product.id
  );

  if (isOnTheCart?.length === 1) {
    isDisabled.value = true;
  }
});

const productItem = () => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.image,
    quantity: quantity.value,
  };
};

watch(quantity, () => {
  productItem();
});
</script>

<style scoped></style>
