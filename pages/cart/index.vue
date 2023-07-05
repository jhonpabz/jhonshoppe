<template>
  <NuxtLayout name="custom">
    <div>Your cart</div>
    <!-- <div v-for="item in cartItems" :key="item.id">
      <div class="flex">
        <div>
          <img
            :src="item.image"
            alt="product img"
            class="mx-auto my-7 h-36 w-auto"
          />
        </div>
        <div>
          <h1>{{ item.title }}</h1>
          <span> {{ item.price }}</span>
        </div>

        <div class="text-lg">
          {{ item.quantity }}
        </div>
      </div>
    </div> -->
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
const cartItems = useCookie("cart");
</script>

<style scoped></style>
