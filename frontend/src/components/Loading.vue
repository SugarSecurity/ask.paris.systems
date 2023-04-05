<template>
  <div class="loading-container">
    <img class="bow-tie" src="@/assets/icon.svg" alt="Bow Tie Icon">
  </div>
</template>

<style scoped>
.loading-container {
  height: calc(100vh - 120px);
  @apply flex justify-center items-center;
}
.bow-tie {
  height: 180px;
  width: 180px;
  -webkit-animation: spin 2s ease-out infinite;
  -moz-animation: spin 2s ease-out infinite;
  animation: spin 2s ease-out infinite;
}

@-moz-keyframes spin { 
  80% { 
    -moz-transform: rotate(730deg); 
  } 

  95% { 
    -moz-transform: rotate(720deg); 
  } 

  100% { 
    -moz-transform: rotate(720deg); 
  }  
}

@-webkit-keyframes spin { 
  80% { 
    -webkit-transform: rotate(730deg); 
  } 

  95% { 
    -webkit-transform: rotate(720deg); 
  } 

  100% { 
    -webkit-transform: rotate(720deg); 
  } 
}

@keyframes spin { 
  80% { 
    -webkit-transform: rotate(730deg); 
    transform: rotate(730deg); 
  } 

  95% { 
    -webkit-transform: rotate(720deg); 
    transform: rotate(720deg); 
  } 

  100% { 
    -webkit-transform: rotate(720deg); 
    transform: rotate(720deg); 
  } 
}
</style>