import Swal from "sweetalert2";

export const useAlert = () => {
  const cartSuccess = () => {
    // @ts-ignore
    Swal.fire({
      title: "Success!",
      text: "Item added to your cart",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const cartItemDeleted = () => {
    // @ts-ignore
    Swal.fire({
      title: "Success!",
      text: "Item removed in cart.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  return {
    cartSuccess,
    cartItemDeleted,
  };
};
