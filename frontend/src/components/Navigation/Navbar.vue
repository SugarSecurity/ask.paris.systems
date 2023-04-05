<template>
  <div class="px-6 py-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 flex justify-between items-center" :class="{ 'border-b': border }">
    <div class="flex font-bold text-2xl text-slate-900 dark:text-white">
      {{ title }}
    </div>

    <div class="flex space-y-1 px-2 pt-2 pb-3 sm:px-3">
      <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.name == current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.name != current ? 'page' : undefined"><router-link :to="item.href">{{ item.name }}</router-link></DisclosureButton>
    </div>

  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    border: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style scoped>
.dropdown {
  @apply relative;
}

.dropdown:hover .menu {
  visibility: visible;
  animation: growIn 0.2s ease-out;
  transform-origin: top center;
  opacity: 1;
}

.menu {
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-out;
  min-width: 12rem;
  @apply absolute z-50 right-0;
}

.menu div {
  @apply w-full overflow-hidden bg-white dark:bg-slate-800 mt-2 py-1 border border-slate-200 dark:border-slate-700 rounded-xl shadow;
}

.menu-link {
  font-family: 'Satoshi-Medium';
  @apply px-4 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-150 ease-in-out w-full text-slate-900 dark:text-white focus:bg-pink-500 focus:text-white;
}

@keyframes growIn {
  from {
    transform: scale(0.95) translateY(-15px);
    opacity: 0;
  }
  to {
    transform: scale(1)  translateY(0);
    opacity: 1;
  }
}
</style>