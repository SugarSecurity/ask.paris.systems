<template>
  <button @click="isOpen = !isOpen" class="w-full py-4 px-6 cursor-pointer flex justify-between items-center hover:bg-slate-100 dark:hover:bg-slate-700 duration-100 ease-in-out">
    <div class="text-slate-600 dark:text-slate-400 font-medium">{{ text }}</div>
    <img class="w-4 h-4 transition duration-150" :class="{ 'rotate-90': isOpen }" src="https://img.icons8.com/fluency-systems-filled/96/94a3b8/chevron-right--v2.png"/>
  </button>

  <div v-show="isOpen" class="accordion-body">
    <slot name="body" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>