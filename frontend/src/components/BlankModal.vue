<template>
  <transition>
    <div id="modal-whole" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-area">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
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