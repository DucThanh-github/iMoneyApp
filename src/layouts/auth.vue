<template>
  <brand-component />
  <slot />
</template>

<script>
import BrandComponent from "@/components/BrandComponent.vue";
export default {
  components: { BrandComponent },
};
</script>
