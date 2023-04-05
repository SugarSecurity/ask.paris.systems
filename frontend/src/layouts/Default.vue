<template>
    <div>
      <Sidebar />
      <!-- <Navbar title="BAS Workflows" firstName="bs"/> -->
      
    </div>
    <div class="page-container">
        <ExploitGen />
    </div>
  </template>
  
  <script>
  console.log("Loading default layout");
  import Sidebar from '@/components/Navigation/Sidebar.vue';
  import ExploitGen from '@/views/ExploitGen.vue';
//   import Configuration from '@/views/Configuration.vue';
  
  export default {
    components: {
      Sidebar,
    //   Configuration,
      ExploitGen
    },
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
  
  @-moz-keyframes spin { 
    80% { 
      -moz-transform: rotate(370deg); 
    } 
  
    95% { 
      -moz-transform: rotate(360deg); 
    } 
  
    100% { 
      -moz-transform: rotate(360deg); 
    }  
  }
  
  @-webkit-keyframes spin { 
    80% { 
      -webkit-transform: rotate(370deg); 
    } 
  
    95% { 
      -webkit-transform: rotate(360deg); 
    } 
  
    100% { 
      -webkit-transform: rotate(360deg); 
    } 
  }
  
  @keyframes spin { 
    80% { 
      -webkit-transform: rotate(370deg); 
      transform: rotate(370deg); 
    } 
  
    95% { 
      -webkit-transform: rotate(360deg); 
      transform: rotate(360deg); 
    } 
  
    100% { 
      -webkit-transform: rotate(360deg); 
      transform: rotate(360deg); 
    } 
  }
  </style>
  
  