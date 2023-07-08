export default defineEventHandler(async () => {
  const data = await $fetch(`https://fakestoreapi.com/products/categories`);

  return data;
});
