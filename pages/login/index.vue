<template>
  <form @submit.prevent="signIn">
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Login</h1>

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            v-model="email"
            placeholder="Email"
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            v-model="password"
            placeholder="Password"
          />
          <FormError v-if="errorMsg" :msg="errorMsg" @close="closeErr" />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 btn btn-success"
          >
            Login
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          No account yet?
          <NuxtLink
            class="no-underline border-b border-blue text-blue"
            to="/register"
          >
            Register </NuxtLink
          >.
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
const client = useSupabaseAuthClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);

const signIn = async () => {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    router.push("/profile");
    successMsg.value = "Check your email to confirm your account";
  } catch (error) {
    errorMsg.value = error.message;
  }
};

const closeErr = (n) => {
  errorMsg.value = n;
};
</script>

<style scoped></style>
