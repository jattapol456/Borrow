<template lang="pug">
body.bg-gray-a
    .pt-14
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
                                            button(class="items-center focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-20 h-5 text-white rounded") REQUEST
                
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
    background: #FFFFFF;
    padding-bottom: 45px;
    width: 1100px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

</style>