<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-6
                .pl-4.pt-6
                    p.text-xl.font-bold REQUEST
                .pl-2.pt-10
                    .pr-96.space-y-6
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Item :
                            input(class="input" id="item").py-2.px-4
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Brand :
                            input(class="input" id="brand").py-2.px-4
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Model :
                            input(class="input" id="model").py-2.px-4
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Code IP :
                            input(class="input" id="code_ip").py-2.px-4
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Quantity :
                            input(class="input" id="quantity").py-2.px-4
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 Reason :
                        .flex.justify-center
                            textarea(class="shadow border-2 border-grayBG rounded p-2 w-80 h-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Reason")
                        .flex.justify-between.items-center.pr-64
                            p.pl-20 PERIOD :
                    .flex.justify-center.pt-4
                        .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                            .space-y-4
                                p BORROW :
                                .pl-6
                                    input.border(type="date" id="" name="")
                                .pl-6
                                    input.border(type="time" id="" name="")
                            .space-y-4
                                p RETURN :
                                .pl-6
                                    input.border(type="date" id="" name="")
                                .pl-6
                                    input.border(type="time" id="" name="") 

                    .flex.justify-center.pt-10
                        Buttonred.w-60.h-10 SEND REQUEST 

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
    background: #ffffff;
    padding-bottom: 45px;
    width: 1100px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.borrow {
    width: 700px;
    height: 250px;
}

</style>