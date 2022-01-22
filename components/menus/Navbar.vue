<template lang="pug">
header
  .container
    .w-full.h-16.shadow-md.flex.justify-between.items-center.px-3
      .flex.space-x-20
        .flex.items-center
          a.text-4xl.font-black.text-red-main IT
          a.text-2xl.font-black.text-red-main.pt-2 SERVICE
        input.search(src="~static/icons/search.svg" placeholder="ค้นหา" type="text")
      .flex.items-center.space-x-8
        div
          img(src="~static/icons/bell.svg")
        div
          p ADMIN
          p Jattapol
        div
          img(src="~static/imgs/Prof.png").object-cover.h-10.w-10.rounded-full

</template>

<script lang="js">
export default{}

</script>

<style lang="postcss" scoped>
.search {
  @apply w-72 h-10 border-2 px-2 rounded-full;
}

</style>
