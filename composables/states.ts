// type FilteredProductsType = {
//   id: number;
//   title: string;
//   price: string;
//   category: string;
//   description: string;
//   image: string;
// };

export const useProducts = () => useState('prd', () => []);
export const useFilteredProducts = () => useState('filteredProducts', () => []);
export const useCategories = () =>
  useState('categories', () => [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ]);
export const useSelectedCategories = () =>
  useState('selectedCategories', () => []);

// export const useGetProducts = async () => {
//   const apiUrl = process.env.API_BASE_URL;
//   // const { data } = await useFetch(url.API_BASE_URL || "");
//   // const { data } = await useFetch(`${apiUrl}`);
//   const { data, status } = await useFetch('https://fakestoreapi.com/products');
//   try {
//     return { data, status };
//   } catch (error) {
//     console.log(error);
//   }
// };
