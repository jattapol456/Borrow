<template lang="pug">
header
  .container.bg-white
    .w-full.h-16.w-full.max-w-screen.flex.justify-between.items-center.px-3
      .flex.space-x-20
        .flex.items-center.pl-2
          a.text-4xl.font-black.text-red-main IT
          a.text-2xl.font-black.text-red-main.pt-2 SERVICE
        input.search(src="~static/icons/search.svg" placeholder="Search" type="text" v-model="search" class="focus:outline-none focus:shadow-outline")
      .flex.items-center.space-x-8
        button
          img.-mt-3(src="~static/icons/bell.svg" v-on:click="showwarn=!showwarn")
          span.flex.h-3.w-3.ml-4.-mt-7
            span.animate-ping.absolute.inline-flex.h-3.w-3.rounded-full.bg-red-main.opacity-75
            span.relative.inline-flex.h-3.w-3.rounded-full.bg-red-main
        div
          button(v-on:click="show=!show").pr-4 ADMIN
        
  .absolute.right-28.bg-white.space-y-2.border-4px-2.py-2.rounded-md.shadow(v-if="showwarn")
    .pl-2.pr-2(v-for="item in items")
      p {{ item.user_id.firstname }}
      .flex.space-x-2
        .flex.space-x-2
          p {{ getStatusName(item.status) }}
          p {{ item.item_id.name }}
        .flex.space-x-2
          p Date:
          p {{ item.dateborrow }}
      button.text-red-main(@click="remove(item._id)") Delete

  .absolute.right-5.bg-white.space-y-2.border-4px-2.py-2.rounded-md.shadow(v-if="show")
    nuxt-link(to="/loginadmin")
      p.pl-2.pr-2 Logout

</template>

<script lang="js">
export default {
  data() {
    return {
      show: false,
      showwarn: false,
      search: "",
      user: {},
      items: [],
    }
  },
  async mounted(){
    this.findUserProfile()
    const res = await this.$axios.get(`http://localhost:3030/borrows/adminnoti`)
    this.items = res.data
  },
  methods:{
    async findUserProfile(){
      const res = await this.$axios.get(`http://localhost:3030/users/profile`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      this.user = res.data
    },
    getStatusName(status){
      if(status == "wait")return"BORROW"
      else if(status == "waitreturn")return"RETURN"
    },
    async remove(id){
      await this.$axios.delete(`http://localhost:3030/borrows/adminnoti/${id}`)
      location.reload()
    }
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
