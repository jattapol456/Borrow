<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-6
                .pl-20.pt-6
                    .flex.justify-between.pr-20
                        .flex.space-x-4
                            p ID :
                            p {{item._id}}
                        .space-x-4
                            a(type="button" class="button text-center bg-red-main focus:bg-red-500 focus:ring-red-200 w-20 h-10 pt-2 text-white rounded" href="#popup") Edit
                            a(@click="deleteItem()" type="button" class="button text-center bg-red-main focus:bg-red-500 focus:ring-red-200 w-24 h-10 pt-2 text-white rounded" href="") Delete
                        

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
                                tbody.h-10
                                    tr.border.border-gray-500
                                        td.pl-4(data-th="NAME") Asada
                                        td(data-th="BORROW") 23/11/2021
                                        td(data-th="RETURN") 25/11/2021
                                        td(data-th="PROBLEM") ปุ่ม Enter กดไม่ได
                                tbody.h-10
                                    tr.border.border-gray-500
                                        td.pl-4(data-th="NAME") Werayut
                                        td(data-th="BORROW") 11/10/2021
                                        td(data-th="RETURN") 22/10/2021
                                        td(data-th="PROBLEM") ปุ่ม S ใช้ไม่ได้


            .popup(id="popup")
                .popup-inner
                    .pl-24.pt-10
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Item :
                            input(class="input" v-model="name").py-2.px-4
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Brand :
                            input(class="input" v-model="brand")
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Model :
                            input(class="input" v-model="model").py-2.px-4
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Code IP :
                            input(class="input" v-model="code_ip").py-2.px-4

                        .flex.justify-center.pt-10(@click="submitedit()")
                            Buttonred.w-60.h-10 SEND REQUEST
                    a.popup__close(href="#") X

</template>

<script lang="js">

export default {
    layout: "layoutadmin",
    data() {
        return {
            item: {},
            name: "",
            brand: "",
            model: "",
            code_ip: "",
            statusitem: "",
        }
    },
    mounted(){
        this.getItemByID()
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
        },
        async submitedit() {
            const res = await this.$axios.patch(
                `http://localhost:3030/items/${this.$route.params.id}`,{
                    name: this.name,
                    brand: this.brand,
                    model: this.model,
                    code_ip: this.code_ip
                }
            )
            location.reload()
        },
        async deleteItem() {
            const res = await this.$axios.delete(
                `http://localhost:3030/items/${this.$route.params.id}`
            )
            this.$router.push("/admin/treasury")
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
    height: 60%;
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
