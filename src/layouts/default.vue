<template>
  <navigation-top />
  <slot />

  <navigation-bottom v-if="meta.isShowFooter" />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationTop from "@/components/NavigationTop.vue";
export default {
  components: { NavigationBottom, NavigationTop },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
