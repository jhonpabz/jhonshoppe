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

//Todo: fetch the categories from API
export const useCategories = () =>
  useState('categories', () => [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ]);
export const useSelectedCategories = () =>
  useState('selectedCategories', () => []);

//Dummy data for now
export const useCartIems = () =>
  useState('cartItems', () => [
    {
      id: 1,
      title: 'Iphone',
      price: '80000',
      category: 'electronics',
      description: 'Lorem',
      image: 'zxv',
      quantity: 1,
    },
    {
      id: 1,
      title: 'Shirt',
      price: '500',
      category: 'mens clothing',
      description: 'Lorem',
      image: 'zxv',
      quantity: 3,
    },
  ]);

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
