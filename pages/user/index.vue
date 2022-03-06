<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-4
                .grid.grid-cols-2(class="lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5")    
                    .border.bg-white.border-gray-500(v-for="item in equipment")
                        nuxt-link(:to="`/user/items/${item._id}`")
                            .flex.justify-between.pl-2.pr-2
                                .flex.space-x-1
                                    p
                                p(:class="`${item.statusitem=='AVAILABLE'?' text-green-700 ':' text-red-700 '}`") {{item.statusitem}}
                            .flex.justify-center.pt-2
                                img.max-h-36.w-36.bg-white.object-contain(:src="item.img")
                            .p-5.space-y-2
                                .flex.space-x-2
                                    p Item
                                    p {{ item.name }}
                                p Problem
                                .flex.items-center.space-x-2
                                    .pl-6
                                        p(v-for="(p) in item.problem") - {{p}}
                                
</template>

<script lang="js">
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            item: {},
        }
    },
    computed: {
        equipment(){
            return this.$store.state.equipment
        },
        ...mapGetters({
            search:"getsearch"
        })
    },
    async mounted (){
        await this.$store.dispatch("fetchItems",this.search)
    },
    watch:{
        search(){
            this.$store.dispatch("fetchItems",this.search)
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {	
	margin-top: 20px;
    margin-bottom: 80px;
}
form {
    background: #FFFFFF;
    padding-bottom: 45px;
    width: 1100px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

</style>