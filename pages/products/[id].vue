<script setup>
const { id } = useRoute().params;
const { data: product } = await useAppFetch("getProducts", id);
</script>

<template>
  <Head>
    <Title>JHONSHOPPE | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <p></p>
  <ProductDetails :product="product" />
</template>

<style></style>
