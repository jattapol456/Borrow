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
<style lang="scss">
.input {
  @apply shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-sm;
}
</style>