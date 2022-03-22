<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form
                .table-container
                    table.table-auto.w-full.border
                        thead.h-12
                            tr.border
                                th.pl-4.text-left EQUIPMENT
                                th.text-left BORROW
                                th.text-left RETURN
                                th.text-left STATUS
                                th.text-left ACTION
                        tbody.h-12
                            tr.border(v-for="item in items" :key="item._id")
                                td.p-2.pl-4 {{item.item_id.name}}
                                td.p-2(data-th="BORROW") {{item.dateborrow}}
                                td.p-2(data-th="RETURN") {{item.datereturn}}
                                td.p-2(data-th="STATUS") {{item.status}}
                                td.p-2
                                    a(@click="select(item)" class="button text-center text-xs p-1 bg-red-main focus:bg-red-500 focus:ring-red-200 w-32 h-6 text-white rounded" href="#popup") Request
            .popup(id="popup")
                .popup-inner(v-if="selectitem!=null")
                    .pl-24
                        .flex.justify-center.pt-4
                            .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                                .space-y-4
                                    p RETURN :
                                    .pl-6
                                        p Datereturn
                                        p {{ selectitem.dateborrow }}
                                    .pl-6
                                        input.border(v-model="datereturn" type="time" id="" name="") 
                        .flex.justify-center.pt-10(@click="waitreturn(selectitem)")
                            Buttonred.w-60.h-10 RETURN
                    a.popup__close(href="#") X
</template>

<script lang="js">
export default {
    data(){
        return {
            items: {},
            user: {},
            returnborrow: "",
            datereturn: "",
            selectitem: null,
        }
    },
    mounted(){
        this.findByUserId()
        this.findUserProfile()
    },
    methods: {
        select(item){
            this.selectitem = item
        },
        async findByUserId(){
            const res = await this.$axios.get(`http://localhost:3030/borrows/userborrow`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            this.items = res.data
        },
        async findUserProfile(){
            const res = await this.$axios.get(`http://localhost:3030/users/profile`,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            this.user = res.data

            this.firstname = res.data.firstname
            this.lastname = res.data.lastname
            this.phone_number = res.data.phone_number
            this.selectDivision = res.data.division
            this.selectDepartment = res.data.department
            this.selectSection = res.data.section
        },
        async waitreturn(item) {
            await this.$axios.patch(
                `http://localhost:3030/borrows/adminstatus/${item._id}`,{
                    status: "waitreturn",
                    datereturn:this.datereturn
                },
            )
            location.reload()
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
    background: #FFFFFF;
    padding-bottom: 45px;
    width: 1100px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
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
  background-color: rgba(0, 0, 0, .80);
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  overflow: hiden;
  transition: .64s ease-in-out;
  &-inner {
    position: relative;
    bottom: -100vw;
    right: -100vh;
    display: flex;
    align-items: center;
    max-width: 800px;
    max-height: 600px;
    width: 30%;
    height: 45%;
    background-color: #fff;
    transform: rotate(32deg);
    transition: .64s ease-in-out;
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
    font-size: .875rem;
    font-weight: 300;
    border-radius: 100%;
    background-color: #0A0A0A;
    z-index: 4;
    color: #fff;
    line-height: 3rem;
    text-align: center;
  }
}
</style>