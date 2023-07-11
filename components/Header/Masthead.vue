<template>
  <div class="relative bg-cover electronics-bg overflow-hidden">
    <div class="z-50 absolute lg:mt-96 md:mt-64 sm:mt-36 inset-x-2/4">
      <div class="flex flex-col items-center justify-center">
        <p class="lg:text-7xl text-4xl text-white w-max">Shop Now!</p>
        <NuxtLink
          to="/products/electronics"
          class="btn btn-active bg-green border-green w-48 mt-8 rounded-3xl text-base"
        >
          Shop Electronics
        </NuxtLink>
      </div>
    </div>
    <img
      src="~/assets/img/electronics.jpg"
      alt="Electronics"
      class="brightness-75"
    />
  </div>
</template>
