<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold text-dark">Full Name</span>
            <input
              id="fullName"
              class="border border-gray-500 rounded-lg px-4 py-3 mt-4"
              type="text"
              placeholder="iMoney..."
              v-model="fullName"
            />
          </label>
        </div>
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
        <span>I'm already a member.</span>
        <router-link
          :to="{ name: 'Login', params: {} }"
          class="text-primary ml-1 font-semibold"
          >Sign In</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useSignUp } from "@/composables/useSignUp";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const { signup, error, isPending } = useSignUp();
    async function onSubmit() {
      await signup(email.value, password.value, fullName.value);
      if (!error.value) {
        router.push({ name: "Home", params: {} });
      }
    }
    return {
      onSubmit,
      fullName,
      email,
      password,
      isPending,
      error,
    };
  },
};
</script>
