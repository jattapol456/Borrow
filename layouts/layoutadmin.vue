<template lang="pug">
#app
  body.bg-grayBG
    Navbaradmin
    .flex
      Sidebaradmin
      .flex-col
        Nuxt
        //- .flex.justify-center
        //-   Pagination
  
</template>

<script lang="js">
import Navbaradmin from '../components/menus/Navbaradmin.vue'
import Sidebaradmin from '../components/menus/Sidebaradmin.vue'
// import Pagination from '../components/Pagination.vue'

export default({
  components: {
    Navbaradmin,
    Sidebaradmin,
    // Pagination,
  },
})
</script>

<style lang="postcss">
.input {
  @apply shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-sm;
}
</style>
