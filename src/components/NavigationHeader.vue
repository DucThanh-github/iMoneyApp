<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              class="w-full h-auto object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
              alt="User avatar"
            />
          </div>
          <h1 class="font-bold text-dark ml-2">{{ meta.text }}</h1>
        </div>
        <div>
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log("route", route);
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
