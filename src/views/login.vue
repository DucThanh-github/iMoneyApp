<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
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
            />
          </label>
        </div>
        <div class="row">
          <button
            class="bg-primary w-full py-4 rounded-lg text-white font-bold"
          >
            Sign Up
          </button>
        </div>
      </form>
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
export default {
  setup() {
    function onSubmit() {}
    return {
      onSubmit,
    };
  },
};
</script>
