<template lang="pug">
#app
  body.bg-grayBG
    Navbar
    .flex
      Sidebar
      Nuxt
  
</template>

<script lang="js">
import Navbar from '../components/menus/Navbar.vue'
import Sidebar from '../components/menus/Sidebar.vue'

export default({
  components: {
    Navbar,
    Sidebar,
  },
})
</script> 
