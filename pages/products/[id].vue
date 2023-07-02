<script setup>
definePageMeta({
  layout: false,
});
const { id } = useRoute().params;
const { data: product, pending } = await useGetProduct(id);
console.log(pending.value, 'pending');
</script>

<template>
  <NuxtLayout name="custom">
    <Head>
      <Title>JHONSHOPPE | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </NuxtLayout>
</template>
