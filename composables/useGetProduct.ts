export const useGetProduct = async (id: string) => {
  // const apiUrl = process.env.API_BASE_URL;
  const apiUrl = 'https://fakestoreapi.com/products';
  const { data, pending } = await useFetch(`${apiUrl}/${id}`, { key: id });
  // const { data } = await useFetch(`${url.API_BASE_URL}/${id}`, { key: id });
  try {
    return { data, pending };
  } catch (error) {
    console.log(error);
  }
};
