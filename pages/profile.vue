<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-6
                .pl-20
                    .flex.justify-between.pr-20
                        img(src="~static/imgs/Prof.png").h-44.object-cover.rounded-full
                        button(class="focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-12 h-5 text-white rounded") Edit
                                
                    .pt-6.space-y-4
                        .flex.space-x-4
                            p Name : 
                            p Jattapon Suayoosay
                        .flex.space-x-4
                            p Employee ID : 
                            p 154335
                        .flex.space-x-4
                            p Division : 
                            p -
                        .flex.space-x-4
                            p Department : 
                            p -
                        .flex.space-x-4
                            p Email : 
                            p jattapol@gmail.com
                        .flex.space-x-4
                            p Phone Number : 
                            p 0987654321
                        p Borrowing History :
                        .pl-10.pr-20.table-container
                            table.table-auto.w-full.border
                                thead.h-12
                                    tr.border
                                        th.pl-4.text-left EQUIPMENT
                                        th.text-left BORROW
                                        th.text-left RETURN
                                        th.text-left ACTION
                                tbody.h-10
                                    tr.border
                                        td.pl-4(data-th="YeEQUIPMENTar") Keyboard
                                        td(data-th="BORROW") 23/11/2021
                                        td(data-th="RETURN") 25/11/2021
                                        td
                                            a(class="button text-center p-1 bg-red-main focus:bg-red-500 focus:ring-red-200 w-32 h-8 text-white rounded" href="#popup") Request
        
        .popup(id="popup")
                .popup-inner
                    .pl-24
                        .flex.justify-center.pt-4
                            .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                                .space-y-4
                                    p RETURN :
                                    .pl-6
                                        input.border(type="date" id="" name="")
                                    .pl-6
                                        input.border(type="time" id="" name="") 

                        .flex.justify-center.pt-10
                            Buttonred.w-60.h-10 SEND REQUEST
                    a.popup__close(href="#") X

</template>

<script lang="js">
import Buttonred from '../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
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