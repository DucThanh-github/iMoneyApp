<template>
  <div v-if="user" class="home">
    <h1>Home page</h1>
    <h1>
      {{ user.displayName }}
    </h1>
  </div>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    // console.log(user.value);
    return {
      user,
    };
  },
};
</script>
