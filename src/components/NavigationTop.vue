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
          <ul @click="store.onClickRightBtn" class="hover:cursor-pointer">
            <li v-if="meta.icon">
              <i class="t2ico t2ico-notification text-2xl" />
            </li>
            <li v-if="meta.endText">
              <span>{{ meta.endText }}</span>
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
import { useStore } from "@/stores";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    console.log("route", route);
    const clickRightBtn = () => {
      console.log("click on top navigation", store.stateRightButton);
      store.onClickRightBtn();
    };
    return {
      meta: computed(() => route.meta),
      clickRightBtn,
      store,
    };
  },
};
</script>
