export default defineCachedEventHandler(async (event) => {
  const { data } = await $fetch("");
  return data;
});
