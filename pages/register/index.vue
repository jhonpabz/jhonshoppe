<template>
  <form @submit.prevent="signUp">
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            v-model="name"
            placeholder="Full Name"
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            v-model="pic_link"
            placeholder="Profile Picture link"
          />

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
            Create Account
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
          Already have an account?
          <NuxtLink
            class="no-underline border-b border-blue text-blue"
            to="/login"
          >
            Log in </NuxtLink
          >.
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
const { signUpSuccess } = useAlert();
const client = useSupabaseAuthClient();
const router = useRouter();
const email = ref("");
const name = ref("");
const pic_link = ref("");
const password = ref(null);
const errorMsg = ref(null);

const signUp = async () => {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value,
          pic_link: pic_link.value,
        },
      },
    });
    if (error) throw error;
    signUpSuccess();
    router.push("/login");
  } catch (error) {
    errorMsg.value = error.message;
  }
};

const closeErr = (n) => {
  errorMsg.value = n;
};
</script>

<style scoped></style>
