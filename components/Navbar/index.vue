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
            <NuxtLink to="/"> <a>Home</a></NuxtLink>
          </li>

          <li>
            <NuxtLink to="/products/electronics"> <a>Electronics</a></NuxtLink>
          </li>

          <li>
            <NuxtLink to="/products/jewelry"> <a>Jewelry</a></NuxtLink>
          </li>

          <li>
            <NuxtLink to="/products/mens-clothing">
              <a>Men's Clothing</a></NuxtLink
            >
          </li>

          <li>
            <NuxtLink to="/products/womens-clothing">
              <a>Women's Clothing</a></NuxtLink
            >
          </li>
        </ul>
      </div>

      <NuxtLink to="/" class="font-extrabold btn btn-ghost normal-case text-xl"
        >JHON<span class="text-green">SHOPPE</span>
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/"> <a>Home</a></NuxtLink>
        </li>

        <li>
          <NuxtLink to="/products/electronics"> <a>Electronics</a></NuxtLink>
        </li>

        <li>
          <NuxtLink to="/products/jewelry"> <a>Jewelry</a></NuxtLink>
        </li>

        <li>
          <NuxtLink to="/products/mens-clothing">
            <a>Men's Clothing</a></NuxtLink
          >
        </li>

        <li>
          <NuxtLink to="/products/womens-clothing">
            <a>Women's Clothing</a></NuxtLink
          >
        </li>
      </ul>
    </div>

    <div class="navbar-end">
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
            <span v-if="cartItems" class="badge badge-sm indicator-item">{{
              cartItems
            }}</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">{{ cartItems }} Items</span>

            <div class="card-actions">
              <NuxtLink to="/cart" class="btn btn-success btn-block"
                >View cart
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartItems = useCookie("cart-quantity");
</script>

<style></style>
