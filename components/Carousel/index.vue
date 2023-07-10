<template>
  <div class="flex h-96 w-auto overflow-hidden">
    <div class="relative">
      <div class="z-50 absolute inset-y-2/4 inset-x-2/4">
        <div class="flex flex-col items-center justify-center">
          <p class="text-4xl text-white w-max">Jewelry</p>
          <NuxtLink
            to="/products/jewelry"
            class="btn btn-active bg-green border-green w-48 mt-6 rounded-3xl text-base"
          >
            View products
          </NuxtLink>
        </div>
      </div>
      <img
        src="~/assets/img/jewelry.jpg"
        alt="Women"
        class="hover:brightness-75 transition duration-200 ease-out hover:ease-in"
      />
    </div>
    <div class="relative">
      <div class="z-50 absolute inset-y-2/4 inset-x-2/4">
        <div class="flex flex-col items-center justify-center">
          <p class="text-4xl text-white w-max">Men's Clothing</p>
          <NuxtLink
            to="/products/mens-clothing"
            class="btn btn-active bg-green border-green w-48 mt-6 rounded-3xl text-base"
          >
            View products
          </NuxtLink>
        </div>
      </div>
      <img
        src="~/assets/img/men.jpg"
        alt="Women"
        class="hover:brightness-75 transition duration-200 ease-out hover:ease-in"
      />
    </div>
    <div class="relative">
      <div class="z-50 absolute inset-y-2/4 inset-x-2/4">
        <div class="flex flex-col items-center justify-center">
          <p class="text-4xl text-white w-max">Women's Clothing</p>
          <NuxtLink
            to="/products/womens-clothing"
            class="btn btn-active bg-green border-green w-48 mt-6 rounded-3xl text-base"
          >
            View products
          </NuxtLink>
        </div>
      </div>
      <img
        src="~/assets/img/women.jpg"
        alt="Women"
        class="hover:brightness-75 transition duration-200 ease-out hover:ease-in"
      />
    </div>
  </div>
</template>
