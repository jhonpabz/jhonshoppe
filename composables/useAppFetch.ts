// const apiDoc = {
//   getCategories: "https://fakestoreapi.com/products/categories",
//   getProducts: "https://fakestoreapi.com/products",
// };

// export const useAppFetch = (apiKey: keyof typeof apiDoc, id: string) => {
//   const apiPath = apiDoc[apiKey];
//   try {
//     if (id) {
//       return useFetch(apiPath + `/${id}`);
//     }

//     return useFetch(apiPath);
//   } catch (error) {
//     console.log(error);
//   }
// };
