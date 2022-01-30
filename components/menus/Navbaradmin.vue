<template lang="pug">
header
  .container.bg-white
    .w-full.h-16.flex.justify-between.items-center.px-3
      .flex.space-x-20
        .flex.items-center.pl-2
          a.text-4xl.font-black.text-red-main IT
          a.text-2xl.font-black.text-red-main.pt-2 SERVICE
        input.search(src="~static/icons/search.svg" placeholder="ค้นหา" type="text" class="focus:outline-none focus:shadow-outline")
      .flex.items-center.space-x-8
        div
          img(src="~static/icons/bell.svg")
        div
          p ADMIN
          p Jattapol
        div
          img(src="~static/imgs/Prof.png").object-cover.h-10.w-10.rounded-full
  div(v-if="show").absolute.right-4.bg-white.space-y-2.border-4
    nuxt-link(to="/profile")
      p.pl-2.pr-2.border.border-black Profile
    nuxt-link(to="/loginadmin")
      p.pl-2.pr-2.border.border-black Logout

</template>

<script lang="js">
export default {
  data() {
    return {
      show: false,
    }
  }
}

</script>

<style lang="postcss" scoped>
.search {
  @apply w-72 h-10 border-2 px-2 rounded-full;
}

</style>
