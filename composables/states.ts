export const useProducts = () => useState("prds", () => []);
export const useFilteredProducts = () => useState("filteredProducts", () => []);
export const useCategories = () => useState("categories", () => []);

export const useSelectedCategories = () =>
  useState("selectedCategories", () => []);

//Dummy data for now
export const useCartIems = () =>
  useState("cartItems", () => [
    {
      id: 1,
      title: "Iphone",
      price: "80000",
      category: "electronics",
      description: "Lorem",
      image: "zxv",
      quantity: 1,
    },
    {
      id: 1,
      title: "Shirt",
      price: "500",
      category: "mens clothing",
      description: "Lorem",
      image: "zxv",
      quantity: 3,
    },
  ]);
``;

// type AddProductsProps ={
//   id:number;
//   title:string;
//   price:string;
//   category:string;
//   description:string;
//   image:string;
// }<Partial<Record<string, number>>>

export const useCart = () => {
  const productCount = useCookie("cart", {
    default() {
      return {};
    },
  });

  const addProduct = (payload) => {
    // @ts-ignore
    productCount.value = payload;
    console.log("asdf", productCount.value);
  };

  return {
    productCount: productCount.value,
    addProduct,
  };
};
