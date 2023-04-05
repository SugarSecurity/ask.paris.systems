<template>
  <transition>
    <div id="modal-whole" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-area">

            <div class="flex justify-between items-center text-xl font-medium px-6 py-5">
              <slot name="header" />

              <button id="close-button" type="button" @click="$emit('close')" class="focus:outline-none bg-white dark:bg-slate-800 dark:text-white text-slate-900 hover:text-white border border-slate-200 dark:border-slate-600 hover:bg-pink-500 dark:hover:bg-pink-500 rounded-full w-8 h-8 flex justify-center items-center transition duration-300 ease-out">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30">
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                </svg>
              </button>
            </div>

            <hr class="border-slate-200 dark:border-slate-600" />

            <div class="body p-6">
              <slot name="body" />
            </div>

            <div class="flex gap-2 justify-end mt-2 px-6">
              <slot class="footer" name="footer" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    // Tooltips
    window.tippy("#close-button", { content: 'Close', arrow: window.tippy.roundArrow, delay: [null, 75], theme: 'ss-tooltip', placement: 'top', animation: 'shift-toward' });

    // Escape button
    window.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        this.$emit('close');
      }
    });
  },
  methods: {
    closeModal() {
      const el = document.getElementById("modal-whole").classList;
      if (!el.contains('modal-enter')) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(121, 121, 121, 0.42);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-height: 90vh;
  max-width: 600px;
  width: 80%;
  margin: 0px auto;
  transition: all 0.3s ease;
}

.modal-area {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 1.2rem;
  box-shadow: inset 6px 84px 79px -40px hsla(0, 0%, 100%, .025), inset 0 -4px 1px -3px hsla(0, 0%, 100%, .25), inset 0 4px 1px -3px hsla(0, 0%, 100%, .25);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(5px);
  max-height: 90vh;
  overflow-y: scroll;
  @apply w-full bg-white;
}

.dark .modal-area {
  @apply bg-slate-800;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>