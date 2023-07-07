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
    const filteredCart = cart.value.filter((item) => item.id !== productId);
    cart.value = filteredCart;
  };

  return {
    addToCart,
    cartQuantity: cartQuantity.value,
    addCartQuantity,
    removeToCart,
  };
};
