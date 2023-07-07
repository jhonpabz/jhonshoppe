export default defineEventHandler(() => {
  const { productsUri } = useRuntimeConfig();
  const url = `${productsUri}/category`;

  return url;
});
