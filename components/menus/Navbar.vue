<template lang="pug">
header
  .container.bg-white
    .w-full.h-16.max-w-full.flex.justify-between.items-center.px-3
      .flex.space-x-20
        .flex.items-center.pl-2
          a.text-4xl.font-black.text-red-main IT
          a.text-2xl.font-black.text-red-main.pt-2 SERVICE
        input.search(src="~static/icons/search.svg" placeholder="Search" type="text" v-model="search" class="focus:outline-none focus:shadow-outline")

      .flex.items-center.space-x-8
        div
          img(src="~static/icons/bell.svg" v-on:click="showwarn=!showwarn")
        div
          p Jattapol
        .pr-6
          img(src="~static/imgs/Prof.png" v-on:click="show=!show").object-cover.h-10.w-10.rounded-full
  .absolute.right-40.bg-white(v-if="showwarn")
    .border.border-black.pl-2.pr-2
      p Allow
      .flex.space-x-2
        .flex.space-x-2
          p BORROW:
          p Keyboard
        .flex.space-x-2
          p Date:
          p 12/11/64

  .absolute.right-4.bg-white.space-y-2.border-4(v-if="show")
    nuxt-link(to="/user/profile")
      p.pl-2.pr-2.border.border-black Profile
    nuxt-link(to="/")
      p.pl-2.pr-2.border.border-black Logout
      
</template>

<script lang="js">
export default {
  data() {
    return {
      show: false,
      showwarn: false,
      search: "",
    }
  },
  mounted(){
    this.findByUserId()
    this.findUserProfile()
  },
  methods:{
    async findByUserId(){
        const res = await this.$axios.get(`http://localhost:3030/borrows/userborrow`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        this.items = res.data
    },
    async findUserProfile(){
        const res = await this.$axios.get(`http://localhost:3030/users`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        this.user = res.data
    },
  },
  watch:{
    search(){
      this.$store.commit("setsearchitem",this.search)
    }
  }
  
}

</script>

<style lang="postcss" scoped>
.search {
  @apply w-72 h-10 border-2 px-2 rounded-full;
}

</style>
