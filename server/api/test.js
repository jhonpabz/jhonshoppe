export default defineEventHandler(async (event) => {
  // export default defineCachedEventHandler(async (event) => {
  const productsUri = useRuntimeConfig();

  const { id } = event.context.params;
  if (id) {
    const { data } = await $fetch(`${productsUri}/${id}`);
    return data;
  }
  const { data } = await $fetch(productsUri);
  return data;
});
