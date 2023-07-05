export const useProducts = () => useState("prds", () => []);
export const useFilteredProducts = () => useState("filteredProducts", () => []);
export const useCategories = () => useState("categories", () => []);
// export const useQuantity = () => useState("quantity", () => 1);
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

interface ProductInterface {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
  // isAdded: boolean;
}

export const useCart = () => {
  const cart = useCookie("cart", {
    default: () => [],
    watch: true,
  });

  const addToCart = (product: ProductInterface) => {
    // @ts-ignore
    cart.value = [...cart.value, product];
  };

  const incrementQty = () => {
    // @ts-ignore
    quantity.value++;
  };
  const decrementQty = () => {
    // @ts-ignore
    quantity.value++;
  };

  return {
    addToCart,
    // quantity: quantity.value,
    incrementQty,
    decrementQty,
  };
};
