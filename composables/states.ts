export const useFilteredProducts = () => useState("filteredProducts", () => []);
export const useHeaderTitle = () => useState("header", () => "All Products");
export const useSearchQuery = () => useState("searchQuery", () => "");
export const useSelectedCategory = () =>
  useState("selectedCategory", () => "Select Category");

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
    const removeItem = cart.value.filter(
      (item: ProductInterface) => item.id !== productId
    );
    cart.value = removeItem;
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
