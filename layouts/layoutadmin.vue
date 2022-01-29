<template lang="pug">
#app
  body.bg-gray-a
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
