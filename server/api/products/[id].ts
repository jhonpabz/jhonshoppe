export default defineEventHandler(async (event) => {
  const { productsUri } = useRuntimeConfig();
  // @ts-ignore
  const { id } = event.context.params;

  const data = await $fetch(`${productsUri}/${id}`);
  return data;
});
