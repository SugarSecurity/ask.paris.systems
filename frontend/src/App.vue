<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const defaultLayout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
};
</script>

<style scoped>
@import url('@/css/satoshi.css');

* {
  font-family: 'Satoshi-Regular';
}
</style>