<template lang="pug">
body
    .pt-14.pl-20
        p BORROW
        .wrapper.pl-6
            form
                .table-container
                    table.table-auto.w-full.border
                        thead.h-12
                            tr.border
                                th.pl-4.text-left 
                                th.text-left EQUIPMENT
                                th.text-left MODEL
                                th.text-left RETURN
                                th.text-left ACTION
                        tbody.h-10
                            tr.border(v-for="item in items" :key="item._id")
                                td.pl-4(data-th=" ")
                                    img(:src="item.img").object-cover.rounded-full.h-10.w-10 
                                td(data-th="EQUIPMENT") {{ item.name }}
                                td(data-th="MODEL") {{ item.model }}
                                td(data-th="RETURN") {{ item.datereturn }}
                                td
                                    .flex.space-x-2
                                        .bg-yellow-300.rounded-full.p-2
                                            a(href="#popup" @click="select(item)")
                                                img(src="~static/icons/eye.svg").object-cover.h-4.w-4

            //- .popup(id="popup")
            //-     .popup-inner(v-if="selectitem!=null")
            //-         .pl-28.pt-10
            //-             .flex.justify-center
            //-                 .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
            //-                     .flex.justify-center
            //-                         img(:src="selectitem.item_id.img").max-h-36.w-36
                                            
            //-                     .pt-6.space-y-4
            //-                         .flex.space-x-4
            //-                             p Borrower : 
            //-                             p {{ selectitem.user_id.firstname }}
            //-                         .flex.space-x-4
            //-                             p Employee ID : 
            //-                             p {{ selectitem.user_id.employee_id }}
            //-                         .flex.space-x-4
            //-                             p Equipment : 
            //-                             p {{ selectitem.item_id.name }}
            //-                         .flex.space-x-4 
            //-                             p Brand : 
            //-                             p {{ selectitem.item_id.brand }}
            //-                         .flex.space-x-4
            //-                             p Model : 
            //-                             p {{ selectitem.item_id.model }}
            //-                         .flex.space-x-4
            //-                             p Reason  : 
            //-                             p {{ selectitem.reason }}
            //-                         .flex.space-x-4
            //-                             p BORROW : 
            //-                             p {{ selectitem.dateborrow }}
            //-                         .flex.space-x-4
            //-                             p RETURN : 
            //-                             p {{ selectitem.datereturn }}

            //-             .flex.justify-center.pt-10(@click="approve(selectitem)")
            //-                 Buttonred.w-60.h-10 APPROVE
            //-         a.popup__close(href="#") X

</template>

<script lang="js">
import Buttonred from '../../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
    layout: "layoutadmin",
    data() {
        return {
            item: {},
            users: [],
            name: "",
            brand: "",
            model: "",
            code_ip: "",
            reason: "",
        }
    },
    mounted(){
        this.getItemByID()
        this.getUser()
    },
    methods: {
        async getItemByID() {
            const res = await this.$axios(
                `http://localhost:3030/items/${this.$route.params.id}`
            )
            this.img = res.data
            this.item = res.data
            this.name = res.data.name
            this.brand = res.data.brand
            this.model = res.data.model
            this.code_ip = res.data.code_ip
            this.statusitem = res.data.statusitem
            this.problem = res.data.problem
        },
        async getUser() {
            const res = await this.$axios(
                `http://localhost:3030/borrows/borrowByItemId/${this.$route.params.id}`
            )
            this.users = res.data
        },
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20px;
  margin-bottom: 80px;
}
form {
  background: #ffffff;
  padding-bottom: 45px;
  width: 1100px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
html,
body {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 12px;
  }
}

.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: 0.64s ease-in-out;
  &-inner {
    position: relative;
    bottom: -100vw;
    right: -100vh;
    display: flex;
    align-items: center;
    max-width: 800px;
    max-height: 1500px;
    width: 60%;
    height: 85%;
    background-color: #fff;
    transform: rotate(32deg);
    transition: 0.64s ease-in-out;
  }
  &:target {
    visibility: visible;
    opacity: 1;
    .popup-inner {
      bottom: 0;
      right: 0;
      transform: rotate(0);
    }
  }
  &__close {
    position: absolute;
    right: -1rem;
    top: -1rem;
    width: 3rem;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 300;
    border-radius: 100%;
    background-color: #0a0a0a;
    z-index: 4;
    color: #fff;
    line-height: 3rem;
    text-align: center;
  }
}
</style>
