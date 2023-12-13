<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 overflow-hidden rounded-full mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
            alt="avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <div v-if="user" class="mt-3">
          <div class="font-bold text-2xl text-primary">
            {{ user.displayName }}
          </div>
          <p class="text-gray-400 mt-2">{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="text-primary font-bold text-2xl">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="menuOption in menuOptions" :key="menuOption.name">
              <router-link
                :to="menuOption.router"
                class="flex text justify-between py-3"
              >
                <div
                  class="flex items-center text-dark"
                  :class="[menuOption.name === 'Logout' ? 'text-red' : '']"
                >
                  <i :class="menuOption.icon" class="text-xl" />
                  <span class="ml-3">{{ menuOption.name }}</span>
                </div>
                <div>
                  <i class="t2ico t2ico-arrow-right" />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    const menuOptions = ref(PROFILE_OPTIONS);
    return {
      menuOptions,
      user,
    };
  },
};
</script>
