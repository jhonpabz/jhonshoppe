<template>
  <div>
    <footer
      class="footer footer-center p-10 bg-base-200 text-base-content rounded"
    >
      <div class="grid grid-flow-col gap-4">
        <NuxtLink to="/" class="link link-hover"> Home </NuxtLink>
        <NuxtLink to="/products/electronics" class="link link-hover">
          Electronics
        </NuxtLink>
        <NuxtLink to="/products/jewelry" class="link link-hover">
          Jewelry
        </NuxtLink>
        <NuxtLink to="/products/mens-clothing" class="link link-hover">
          Men's Clothing
        </NuxtLink>
        <NuxtLink to="/products/womens-clothing" class="link link-hover">
          Women's Clothing
        </NuxtLink>
        <NuxtLink to="/cart" class="link link-hover"> Cart </NuxtLink>
        <NuxtLink to="/profile" class="link link-hover"> Profile </NuxtLink>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4 text-4xl">
          <NuxtLink to="https://www.facebook.com/" target="_blank">
            <IconsFb />
          </NuxtLink>
          <NuxtLink to="https://ph.linkedin.com/in/" target="_blank">
            <IconsLinkedin />
          </NuxtLink>
          <NuxtLink to="https://github.com/" target="_blank">
            <IconsGithub />
          </NuxtLink>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by JHONPABZ</p>
      </div>
    </footer>
  </div>
</template>

<script setup></script>
