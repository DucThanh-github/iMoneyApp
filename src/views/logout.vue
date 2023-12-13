<template>
  <h1>logout</h1>
</template>

<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { logout, error } = useLogout();
    const router = useRouter();
    async function onLogout() {
      await logout();
      if (!error.value) {
        router.push({ name: "Login", params: {} });
      }
    }
    onLogout();
  },
};
</script>
