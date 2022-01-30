<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-6
                .pl-4.pt-6
                    p.text-xl.font-bold REQUEST
                .pl-2.pt-10
                    .pr-96.space-y-6
                        .flex.justify-between.items-center.pr-72
                            p.pl-20 Item :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-between.items-center.pr-72
                            p.pl-20 Brand :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-between.items-center.pr-72
                            p.pl-20 Model :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-between.items-center.pr-72
                            p.pl-20 Code IP :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-between.items-center.pr-72
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
                        button(class="focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-60 h-10 text-white rounded") SEND REQUEST 
                                    
</template>

<script lang="js">
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {	
	margin-top: 20px;
    margin-bottom: 80px;
}
form {
    background: #f5f5f5;
    padding-bottom: 45px;
    width: 1100px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.borrow {
    width: 700px;
    height: 250px;
}

</style>