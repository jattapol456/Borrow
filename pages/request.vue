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
                                th.text-left DATE
                                th.text-left EQUIPMENT
                                th.text-left BORROW
                                th.text-left RETURN
                                th.text-left ACTION
                        tbody.h-10
                            tr.border
                                td.pl-4(data-th="NAME") Jattapol
                                td(data-th="DATE") 21/11/2021
                                td(data-th="YeEQUIPMENTar") Keyboard
                                td(data-th="BORROW") 23/11/2021
                                td(data-th="RETURN") 25/11/2021
                                td
                                    .flex.space-x-2
                                        .bg-gray-300.rounded-full.p-1
                                            a(href="#popup")
                                                img(src="~static/icons/eye.svg").object-cover.h-5.w-5
                                        .bg-green-500.rounded-full.p-1
                                            img(src="~static/icons/check.svg").object-cover.h-5.w-5
                                        .bg-red-main.rounded-full.p-1
                                            img(src="~static/icons/bin.svg").object-cover.h-5.w-5
                        tbody.h-10
                            tr.border
                                td.pl-4(data-th="NAME") Asda
                                td(data-th="DATE") 2/12/2021
                                td(data-th="YeEQUIPMENTar") Keyboard
                                td(data-th="BORROW") 3/12/2021
                                td(data-th="RETURN") 7/12/2021
                                td
                                    .flex.space-x-2
                                        .bg-gray-300.rounded-full.p-1
                                            a(href="#popup")
                                                img(src="~static/icons/eye.svg").object-cover.h-5.w-5
                                        .bg-green-500.rounded-full.p-1
                                            img(src="~static/icons/check.svg").object-cover.h-5.w-5
                                        .bg-red-main.rounded-full.p-1
                                            img(src="~static/icons/bin.svg").object-cover.h-5.w-5

        .wrapper.pl-6(v-else)
            form
                .table-container
                    table.table-auto.w-full.border
                        thead.h-12
                            tr.border
                                th.pl-4.text-left NAME
                                th.text-left DATE
                                th.text-left EQUIPMENT
                                th.text-left RETURN
                                th.text-left TIME
                                th.text-left ACTION
                        tbody.h-10
                            tr.border
                                td.pl-4(data-th="NAME") Jattapol
                                td(data-th="DATE") 21/11/2021
                                td(data-th="YeEQUIPMENTar") Keyboard
                                td(data-th="RETURN") 25/11/2021
                                td(data-th="TIME") 10:30 AM
                                td
                                    a(class="button text-center p-1 bg-red-main focus:bg-red-500 focus:ring-red-200 w-32 h-8 text-white rounded" href="#popup") EXAMINE

                        tbody.h-10
                            tr.border
                                td.pl-4(data-th="NAME") Asda
                                td(data-th="DATE") 2/12/2021
                                td(data-th="YeEQUIPMENTar") Keyboard
                                td(data-th="RETURN") 7/12/2021
                                td(data-th="TIME") 11:00 AM
                                td
                                    a(class="button text-center p-1 bg-red-main focus:bg-red-500 focus:ring-red-200 w-32 h-8 text-white rounded" href="#popup") EXAMINE
                        

            .popup(id="popup")
                .popup-inner
                    .pl-28.pt-10
                        .flex.justify-center
                            .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                                .flex.justify-center
                                    img(src="~static/imgs/keyboard.png").h-44
                                            
                                .pt-6.space-y-4
                                    .flex.space-x-4
                                        p Borrower : 
                                        p เจตพล
                                    .flex.space-x-4
                                        p Employee ID : 
                                        p 62021348
                                    .flex.space-x-4
                                        p Equipment : 
                                        p Keyboard
                                    .flex.space-x-4 
                                        p Brand : 
                                        p Dell
                                    .flex.space-x-4
                                        p Model : 
                                        p X3
                                    .flex.space-x-4
                                        p Quantity  : 
                                        p 1
                                    .flex.space-x-4
                                        p Reason  : 
                                        p ใช้ภายในบริษัท
                                    .flex.space-x-4
                                        p BORROW : 
                                        p 23/11/2021
                                    .flex.space-x-4
                                        p RETURN : 
                                        p 25/11/2021

                        .flex.justify-center.pt-10
                            Buttonred.w-60.h-10 APPROVE
                            
                    a.popup__close(href="#") X


</template>

<script lang="js">
import Buttonred from '../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
    layout: "layoutadmin",
    data() {
        return{
            mode: "Borrow"
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
html, body {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  html, body {
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
  background-color: rgba(0, 0, 0, .80);
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: .64s ease-in-out;
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