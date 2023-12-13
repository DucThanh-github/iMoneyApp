<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold text-dark">Email Address</span>
            <input
              id="email"
              class="border border-gray-500 rounded-lg px-4 py-3 mt-4"
              type="email"
              placeholder="example@example.com"
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold text-dark">Password</span>
            <input
              id="password"
              class="border border-gray-500 rounded-lg px-4 py-3 mt-4"
              type="password"
              autocomplete="password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="bg-primary w-full py-4 rounded-lg text-white font-bold"
          >
            Sign Up
          </button>
          <button
            v-else
            class="bg-gray-500 w-full py-4 rounded-lg text-white font-bold"
          >
            Loading...
          </button>
        </div>
      </form>

      <!-- start error -->
      <div v-if="error" class="mt-4 text-red">
        {{ error }}
      </div>

      <!-- start direction -->
      <div class="w-full mt-8 text-center">
        <span>I'm a new user.</span>
        <router-link
          :to="{ name: 'Register', params: {} }"
          class="text-primary ml-1 font-semibold"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { signin, error, isPending } = useSignIn();
    const router = useRouter();
    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Profile", params: {} });
      }
    }
    return {
      onSubmit,
      error,
      email,
      password,
      isPending,
    };
  },
};
</script>
