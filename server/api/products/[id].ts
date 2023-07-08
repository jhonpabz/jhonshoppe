export default defineEventHandler(async (event) => {
  // @ts-ignore
  const { id } = event.context.params;

  const data = await $fetch(`https://fakestoreapi.com/products/${id}`);
  return data;
});
