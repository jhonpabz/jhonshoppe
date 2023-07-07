<template>
  <div class="navbar bg-[#FFFDF5]">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <label for="my-drawer" class="drawer-button">
              <IconsFilter class="text-2xl" />Filter
            </label>
          </li>
        </ul>
      </div>
      <div class="btn btn-ghost normal-case text-xl">
        <NuxtLink to="/" class="font-extrabold"
          >JHON<span class="text-green">SHOPPE</span></NuxtLink
        >
      </div>
      <label for="my-drawer" class="btn btn-ghost drawer-button ml-4">
        <IconsFilter class="text-2xl" />Filter
      </label>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1"></ul>
    </div>

    <!-- CART BUTTON -->
    <div class="flex-none navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">{{ cartItems }}</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">{{ cartItems }} Items</span>
            <!--     <span class="text-info">Subtotal: $999</span> -->
            <div class="card-actions">
              <NuxtLink to="/cart" class="btn btn-success btn-block"
                >View cart</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  <div class="navbar-end">
      <NuxtLink to="/cart">
        <a class="btn">
          <IconsCart />
        </a>
      </NuxtLink>
    </div> -->
  </div>
</template>

<script setup>
const cartItems = useCookie("cart-quantity");
// const url = useRoute();

// const isInvisible = ref(false);

// watch(url, () => {
//   if (url.path !== "/") {
//     isInvisible.value = true;
//   }
// });    :class="{ invisible: isInvisible }"
</script>

<style></style>
