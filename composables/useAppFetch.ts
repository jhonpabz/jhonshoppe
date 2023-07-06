const apiDoc = {
  getProducts: "https://fakestoreapi.com/products",
  getCategories: "https://fakestoreapi.com/products/categories",
  getCategory: "https://fakestoreapi.com/products/category",
};

export const useAppFetch = (apiKey: keyof typeof apiDoc, id: string) => {
  const apiPath = apiDoc[apiKey];
  try {
    if (id) {
      return useFetch(`${apiPath}/${id}`);
    }

    return useFetch(apiPath);
  } catch (error) {
    console.log(error);
  }
};
