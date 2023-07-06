<template>
  <div>
    <!--  lg:drawer-open -->
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->

        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"> </label>
        <!--        <div for="my-drawer " class="pl-8 pt-8 flex">
          <IconsFilter class="mt-1" />
          <span class="font-bold">FILTERS</span>
        </div> -->
        <ul class="menu p-4 w-72 h-full text-base-content bg-base-200">
          <!-- Sidebar content here -->
          <div for="my-drawer " class="pl-4 mt-8 mb-2 pt-8 flex">
            <IconsFilter class="mt-1" />
            <span class="font-bold">FILTERS</span>
          </div>
          <SidebarSearch />

          <SidebarSortByCategory />
          <div class="mt-8">
            <SidebarSort />
          </div>
          <div class="mt-8"><SidebarSortByPrice /></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
