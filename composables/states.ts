export const useFilteredProducts = () => useState("filteredProducts", () => []);
export const useCategories = () => useState("categories", () => []);

interface ProductInterface {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const cartQuantity = useCookie("cartQuantity", {
    default() {
      return {};
    },
  });
  const cart = useCookie("cart", {
    default: () => [],
    watch: true,
  });

  const addToCart = (product: ProductInterface) => {
    // @ts-ignore
    cart.value = [...cart.value, product];
  };

  const addCartQuantity = (num: number) => {
    // @ts-ignore
    cartQuantity.value = num;
  };

  // const incrementQty = () => {
  //   // @ts-ignore
  //   quantity.value++;
  // };
  // const decrementQty = () => {
  //   // @ts-ignore
  //   quantity.value++;
  // };

  return {
    addToCart,
    cartQuantity: cartQuantity.value,
    addCartQuantity,
    // quantity: quantity.value,
    // incrementQty,
    // decrementQty,
  };
};
