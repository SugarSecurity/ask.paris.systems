<template>
  <router-link :to="pageURL" active-class="active-link" :id="id + '-link'">
    <img :src="icon" />
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    pageURL: {
      type: String,
      required: true
    },
  },
  mounted() {
    window.tippy(`#${this.id}-link`, { 
      content: this.title, 
      arrow: window.tippy.roundArrow, 
      delay: [null, 75], 
      theme: 'ss-tooltip',
      placement: 'right', 
      animation: 'shift-toward' 
    });
  }
}
</script>

<style scoped>
a {
  @apply flex flex-col justify-center items-center gap-2 rounded-xl py-4 hover:bg-slate-800 transition duration-200 ease-in-out;
}

img {
  @apply w-7 h-7 transition-transform duration-300 ease-out;
}

a:hover img {
  @apply scale-110;
}

.active-link {
  @apply bg-pink-500 !important;
}
</style>