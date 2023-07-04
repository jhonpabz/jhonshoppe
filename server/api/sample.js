export default defineCachedEventHandler(async (event) => {
  // Handle query params
  const { id } = useQuery(event);

  // Handle post data
  // const { age } = await useBody(event)

  // api call with private key
  const { data } = await $fetch("https://wasdfe.asdfasdr");
  return data;
});
