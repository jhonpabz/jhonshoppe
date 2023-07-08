export const useFilteredProducts = () => useState("filteredProducts", () => []);
export const useHeaderTitle = () => useState("header", () => "All Products");

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
    cartQuantity.value++;
    // @ts-ignore
    cart.value = [...cart.value, product];
  };

  const addCartQuantity = (num: number) => {
    cartQuantity.value = num;
  };

  const removeToCart = (productId: number) => {
    cartQuantity.value--;
    // @ts-ignore
    const filteredCart = cart.value.filter((item) => item.id !== productId);
    cart.value = filteredCart;
  };

  const totalPrice = (quantity: number, price: number) => {
    const total = quantity * price;
    return total;
  };

  return {
    addToCart,
    addCartQuantity,
    removeToCart,
    totalPrice,
  };
};
