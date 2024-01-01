<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 bg-white left-0 pt-4 p-b-safe-4"
  >
    <div class="container mx-auto h-full px-8">
      <ul class="flex justify-between items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.text">
            <i class="t2ico text-2xl" :class="navItem.icon" />
          </router-link>
        </li>
      </ul>
    </div>

    <div
      data-circle
      class="top-0 absolute left-1/2 transform -translate-x-1/2 bg-dark-light"
    ></div>
    <div
      data-circle-inset
      class="absolute flex justify-center left-1/2 items-center bg-primary text-white -top-6 w-12 h-12 rounded-full cursor-pointer transform -translate-x-1/2"
      @click="goToRouter"
    >
      <i class="t2ico t2ico-plus" />
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from "vue-router";
export default {
  setup() {
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const router = useRouter();
    function goToRouter() {
      router.push({ name: "Transaction", params: {} });
    }
    return {
      navItems,
      goToRouter,
    };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle] {
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
