import Swal from "sweetalert2";

export const useAlert = () => {
  const cartSuccess = () => {
    Swal.fire({
      title: "Added!",
      text: "Item added to your cart",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const signUpSuccess = () => {
    Swal.fire({
      title: "Account created!",
      text: "Check your email to confirm your account",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const cartItemDeleted = () => {
    Swal.fire({
      title: "Deleted!",
      text: "Item has been removed to cart.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  return {
    cartSuccess,
    cartItemDeleted,
    signUpSuccess,
  };
};
