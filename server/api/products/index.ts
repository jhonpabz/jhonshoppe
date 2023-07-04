export default defineEventHandler(async () => {
  const { productsUri } = useRuntimeConfig();
  const data = await $fetch(productsUri);

  return data;
});
