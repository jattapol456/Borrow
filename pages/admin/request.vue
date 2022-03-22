<template lang="pug">
body
    .pt-14.pl-20
        select(v-model="mode").bg-grayBG
            option(value="Borrow") Borrow
            option(value="Return") Return
        .wrapper.pl-6(v-if="mode=='Borrow'")
            form
                .table-container
                    table.table-auto.w-full.border
                        thead.h-12
                            tr.border
                                th.pl-4.text-left NAME
                                th.text-left EQUIPMENT
                                th.text-left BORROW
                                th.text-left RETURN
                                th.text-left ACTION
                        tbody.h-12
                            tr.border(v-for="item in items" :key="item._id")
                                td.pl-4(data-th="NAME") {{ item.user_id.firstname }}
                                td(data-th="EQUIPMENT") {{ item.item_id.name }}
                                td(data-th="BORROW") {{ item.dateborrow }}
                                td(data-th="RETURN") {{ item.datereturn }}
                                td
                                    .flex.space-x-2
                                        .bg-yellow-300.rounded-full.p-2
                                            a(href="#popup" @click="select(item)")
                                                img(src="~static/icons/eye.svg").object-cover.h-4.w-4
                                        button.bg-green-500.rounded-full.p-2(@click="approve(item)")
                                            img(class="icon" src="~static/icons/check.svg").object-cover.h-4.w-4
                                        button.bg-red-400.rounded-full.p-2(@click="deleteBorrow(item)" type="button")
                                            img(class="icon" src="~static/icons/cancel.svg").object-cover.h-4.w-4

            .popup(id="popup")
                .popup-inner(v-if="selectitem!=null")
                    .pl-28.pt-10
                        .flex.justify-center
                            .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                                .flex.justify-center
                                    img(:src="selectitem.item_id.img").max-h-36.w-36  
                                .pt-6.space-y-4
                                    .flex.space-x-4
                                        p Borrower : 
                                        p {{ selectitem.user_id.firstname }}
                                    .flex.space-x-4
                                        p Employee ID : 
                                        p {{ selectitem.user_id.employee_id }}
                                    .flex.space-x-4
                                        p Equipment : 
                                        p {{ selectitem.item_id.name }}
                                    .flex.space-x-4 
                                        p Brand : 
                                        p {{ selectitem.item_id.brand }}
                                    .flex.space-x-4
                                        p Model : 
                                        p {{ selectitem.item_id.model }}
                                    .flex.space-x-4
                                        p Reason  : 
                                        p {{ selectitem.reason }}
                                    .flex.space-x-4
                                        p BORROW : 
                                        p {{ selectitem.dateborrow }}
                                    .flex.space-x-4
                                        p RETURN : 
                                        p {{ selectitem.datereturn }}
                        .flex.justify-center.pt-10(@click="approve(selectitem)")
                            Buttonred.w-60.h-10 APPROVE
                    a.popup__close(href="#") X

        .wrapper.pl-6(v-else)
            form
                .table-container
                    table.table-auto.w-full.border
                        thead.h-12
                            tr.border
                                th.pl-4.text-left NAME
                                th.text-left EQUIPMENT
                                th.text-left RETURN
                                th.text-left TIME
                                th.text-left ACTION
                        tbody.h-12
                            tr.border(v-for="item in itemreturn" :key="item._id")
                                td.pl-4(data-th="NAME") {{ item.user_id.firstname }}
                                td(data-th="EQUIPMENT") {{ item.item_id.name }}
                                td(data-th="RETURN") {{ item.datereturn }}
                                td(data-th="TIME") {{ item.timereturn }}
                                td
                                    a(@click="select(item)" class="button text-center p-1 bg-red-main focus:bg-red-500 focus:ring-red-200 w-32 h-8 text-white rounded" href="#popupreturn") CONFIRM
     
                .popupreturn(id="popupreturn")
                    .popupreturn-inner(v-if="selectitem!=null")
                        .pl-28.pt-10
                            .flex.justify-between
                                .flex.space-x-4
                                    p ID :
                                    p {{ selectitem.item_id._id }}
                            .flex.justify-center.pt-2
                                img(:src="selectitem.item_id.img").max-h-36.w-36
                            .pt-6.space-y-4
                                .flex.space-x-4
                                    p Equipment : 
                                    p Keyboard
                                p(v-for="(p,i) in selectitem.item_id.problem") Problem {{i}} {{p}}
                                .flex.space-x-4
                                    textarea(v-model="problem" class="shadow border-2 border-grayBG rounded p-2 w-96 h-28 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Problem")       
                            .flex.justify-center.pt-10(@click="updateProblem(selectitem)")
                                Buttonred.w-60.h-10 APPROVE
                        a.popup__close(href="#") X

</template>

<script lang="js">
import Buttonred from '../../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
    layout: "layoutadmin",
    data() {
        return{
            mode: "Borrow",
            items:[],
            selectitem: null,
            problem: "",
            itemreturn: [],
        }
    },
    async mounted(){
        const res = await this.$axios.get(`http://localhost:3030/borrows/adminfindborrow`)
        this.items = res.data
        const resreturn = await this.$axios.get(`http://localhost:3030/borrows/adminfindborrowreturn`)
        this.itemreturn = resreturn.data
    },
    methods: {
        async approve(item){
            await this.$axios.patch(
                `http://localhost:3030/borrows/adminstatus/${item._id}`,{status: "approve"}
            )
            await this.$axios.patch(
                `http://localhost:3030/items/${item.item_id._id}`,{
                    statusitem: "UNAVAILABLE",
                }
            )
            location.reload()
        },
        select(item){
            this.selectitem = item
        },
        async deleteBorrow(item) {
            const res = await this.$axios.delete(
                `http://localhost:3030/borrows/${item._id}`
            )
            location.reload()
        },
        async updateProblem(item) {
            await this.$axios.patch(
                `http://localhost:3030/borrows/adminstatus/${item._id}`,{
                    status: "completed",
                    problem:this.problem,
                }
            )
            await this.$axios.patch(
                `http://localhost:3030/items/${item.item_id._id}`,{
                    problem:[...item.item_id.problem,this.problem],
                    statusitem: "AVAILABLE",
                }
            )
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
  background: #ffffff;
  padding-bottom: 45px;
  width: 1100px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
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
.popupreturn {
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
    max-width: 600px;
    max-height: 1000px;
    width: 65%;
    height: 75%;
    background-color: #fff;
    transform: rotate(32deg);
    transition: 0.64s ease-in-out;
  }
  &:target {
    visibility: visible;
    opacity: 1;
    .popupreturn-inner {
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
