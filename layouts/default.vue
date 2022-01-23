<template lang="pug">
#app
  Navbar
  .flex
    Sidebar
    .pl-20
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
