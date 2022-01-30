<template lang="pug">
#app
  body.bg-grayBG
    Navbaradmin
    .flex
      Sidebaradmin
      Nuxt
  
</template>

<script lang="js">
import Navbaradmin from '../components/menus/Navbaradmin.vue'
import Sidebaradmin from '../components/menus/Sidebaradmin.vue'

export default({
  components: {
    Navbaradmin,
    Sidebaradmin,
  },
})
</script> 
