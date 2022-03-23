<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            .form.p-6
                .pl-20.pt-6
                    .flex.justify-between.pr-20
                        .flex.space-x-4
                            p ID :
                            p {{item._id}}
                        a(class="text-center focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-32 h-10 pt-2 text-white rounded" href="#popup") Request
                    .flex.justify-center.pr-20
                        img(:src="item.img").h-44
                    .pt-6.space-y-4
                        .flex.space-x-4
                            p Equipment : 
                            p {{item.name}}
                        .flex.space-x-4
                            p Brand : 
                            p {{item.brand}}
                        .flex.space-x-4
                            p Model : 
                            p {{item.model}}
                        .flex.space-x-4
                            p Code : 
                            p {{item.code_ip}}
                        .flex.space-x-4
                            p Status : 
                            p(:class="`${item.statusitem=='AVAILABLE'?' text-green-700 ':' text-red-700 '}`") {{item.statusitem}}
                        .space-x-4
                            p Problem : 
                            .pl-4
                                p(v-for="(p) in item.problem") {{p}}
                        p Borrowing History :
                        .pl-10.pr-20.table-container
                            table.table-auto.w-full.border
                                thead.h-12
                                    tr.border.border-gray-500
                                        th.pl-4.text-left NAME
                                        th.text-left BORROW
                                        th.text-left RETURN
                                        th.text-left PROBLEM
                                tbody.h-10(v-for="user in users")
                                    tr.border.border-gray-500
                                        td.pl-4(data-th="NAME") {{user.user_id.firstname}}
                                        td(data-th="BORROW") {{user.dateborrow}}
                                        td(data-th="RETURN") {{user.datereturn}}
                                        td(data-th="PROBLEM") {{user.problem}}
            .popup(id="popup")
                .popup-inner
                    form(@submit.prevent="postBorrow()").pl-24.pt-10
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Reason :
                        .flex.justify-center
                            textarea(:required="true" v-model="reason" class="shadow border-2 border-grayBG rounded p-2 w-80 h-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Reason")
                        .flex.justify-center.pt-4
                            .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                                .space-y-4
                                    p BORROW :
                                    .pl-6
                                        input.border(type="date" id="" name="" v-model="dateborrow" :required="true")
                                    .pl-6
                                        input.border(type="time" id="" name="" v-model="timeborrow" :required="true")
                                .space-y-4
                                    p RETURN :
                                    .pl-6
                                        input.border(type="date" id="" name="" v-model="datereturn" :required="true")
                                    .pl-6
                                        input.border(type="time" id="" name="" v-model="timereturn" :required="true") 
                        .flex.justify-center.pt-10
                            button(type="submit")
                                Buttonred.w-60.h-10 SEND REQUEST
                    a.popup__close(href="#") X

</template>

<script lang="js">

export default {
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
        async postBorrow() {
            this.$axios.post(`http://localhost:3030/borrows`,{
            "item_id": this.$route.params.id,
            "reason": this.reason,
            "dateborrow": this.dateborrow,
            "timeborrow": this.timeborrow,
            "datereturn": this.datereturn,
            "timereturn": this.timereturn
            },{
                headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
            location.reload()
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20px;
  margin-bottom: 80px;
}
.form {
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
    max-height: 600px;
    width: 60%;
    height: 70%;
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
