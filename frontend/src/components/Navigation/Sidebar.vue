<template>
  <div class="fixed flex flex-col h-screen bg-slate-900 dark:border-r dark:border-slate-700 text-white py-6 px-4">
    <img class="logo-icon" src="@/assets/icon.svg" alt="Sugar Security Logo">
    
    <div class="flex-grow justify-between flex flex-col gap-6">
      <div class="flex flex-col gap-6">

        <SidebarLink
          title="Exploit Code Generator"
          id="exploitgen"
          icon="https://img.icons8.com/ios-filled/96/ffffff/film-noir.png"
          pageURL="/exploit-gen"
        />

      </div>

      <SidebarButton
        title="Toggle Dark Mode"
        id="dark-mode"
        icon="https://img.icons8.com/fluency-systems-regular/96/ffffff/bright-moon.png"
        @clicked="toggleDarkMode"
      />
    </div>
  </div>
</template>

<script>
import SidebarLink from "@/components/Navigation/SidebarLink.vue";
import SidebarButton from "@/components/Navigation/SidebarButton.vue";

export default {
  components: {
      SidebarLink,
      SidebarButton
  },
  data() {
      return {
          isDarkMode: false,
      }
  },
  methods: {
      toggleDarkMode() {
          this.isDarkMode = !this.isDarkMode;
      }
  }
}
</script>

<style scoped>
.page-container {
margin-left: 88px; 
min-height: 100vh;
@apply flex-grow bg-slate-50 overflow-y-scroll;
}

.dark .page-container {
@apply bg-slate-900 text-white !important;
}

.logo-icon {
@apply mb-24 w-14 h-14 mx-auto;
}

.logo-icon:hover {
-webkit-animation: spin 1s ease-out infinite;
-moz-animation: spin 1s ease-out infinite;
animation: spin 1s ease-out infinite;
}

</style>