export default defineEventHandler(async (event) => {
  const { productsUri } = useRuntimeConfig();
  const { id } = event.context.params;

  const data = await $fetch(`${productsUri}/${id}`);
  return data;
});
