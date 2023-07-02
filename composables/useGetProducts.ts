export const useGetProducts = async () => {
  const apiUrl = process.env.API_BASE_URL;
  // const { data } = await useFetch(url.API_BASE_URL || "");
  // const { data } = await useFetch(`${apiUrl}`);
  const { data, status } = await useFetch('https://fakestoreapi.com/products');
  try {
    return { data, status };
  } catch (error) {
    console.log(error);
  }
};
