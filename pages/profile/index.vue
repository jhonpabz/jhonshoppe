<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <img
        v-if="user?.user_metadata?.pic_link"
        :src="user?.user_metadata?.pic_link"
        alt="User"
        class="max-w-sm rounded-2xl shadow-2xl"
      />

      <img
        v-else
        src="~/assets/img/default-user.jpg"
        alt="User"
        class="max-w-sm rounded-2xl shadow-2xl"
      />
      <div class="ml-5">
        <h1 class="text-5xl font-bold">Profile</h1>
        <h1 class="text-2xl font-bold">{{ user?.user_metadata.name }}</h1>
        <p class="py-6">Email: {{ user?.email }}</p>
        <button @click="logout" class="btn btn-success text-white">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
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

const profilePic = user?.user_metadata?.pic_link
  ? user?.user_metadata.pic_link
  : "~/assets/img/default-user.jpg";

console.log(user.value);
</script>

<style scoped></style>
