export const useFilteredProducts = () => useState("filteredProducts", () => []);
export const useCategories = () => useState("categories", () => []);

export const useCart = () => {
  const cartQuantity = useCookie("cart-quantity", {
    default: () => 0,
    watch: true,
  });
  const cart = useCookie("cart", {
    default: () => [],
    watch: true,
  });

  const addToCart = (product: ProductInterface) => {
    // @ts-ignore
    cartQuantity.value++;
    // @ts-ignore
    cart.value = [...cart.value, product];
  };

  const addCartQuantity = (num: number) => {
    // @ts-ignore
    cartQuantity.value = num;
  };

  const removeToCart = (productId: number) => {
    cartQuantity.value--;
    // @ts-ignore
    const filteredCart = cart.value.filter((item) => item.id !== productId);
    cart.value = filteredCart;
  };

  return {
    addToCart,
    addCartQuantity,
    removeToCart,
  };
};
