<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <IconsAccount class="text-2xl text-center m-auto align-middle mt-2" />
        <!--       <img src="~/assets/img/user.png" alt="User" /> -->
      </div>
    </label>
    <ul
      tabindex="0"
      class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <NuxtLink to="/profile" class="justify-between">
          Profile
          <span class="badge">New</span>
        </NuxtLink>
      </li>
      <li><a @click="logout">Logout</a></li>
    </ul>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

const logout = async () => {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
  } catch (error) {
    console.log(error.message);
  }
};
</script>
