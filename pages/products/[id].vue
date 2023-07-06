<script setup>
const { id } = useRoute().params;
const { data: product } = await useAppFetch("getProducts", id);
// const cart = useCart();
</script>

<template>
  <Head>
    <Title>JHONSHOPPE | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <p></p>
  <ProductDetails :product="product" />
  <!-- <button @click="cart.addCartQuantity(25)">Add Qty</button> -->
</template>

<style></style>
