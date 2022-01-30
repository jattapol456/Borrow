<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-6
                .pl-20.pt-6
                    .flex.justify-between.pr-20
                        .flex.space-x-4
                            p ID :
                            p 001
                        button(class="focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-28 h-8 text-white rounded") Edit
                    
                    .flex.justify-center.pr-20
                        img(src="~static/imgs/keyboard.png").h-44
                                
                    .pt-6.space-y-4
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
                            p Code : 
                            p -
                        .flex.space-x-4
                            p Status : 
                            p AVAILABLE
                        .space-x-4
                            p Problem : 
                            .pl-4
                                p ปุ่ม Enter กดไม่ได
                                p ปุ่ม S ใช้ไม่ได้
                        p Borrowing History :
                        .pl-10.pr-20.table-container
                            table.table-auto.w-full.border
                                thead.h-12
                                    tr.border
                                        th.pl-4.text-left NAME
                                        th.text-left BORROW
                                        th.text-left RETURN
                                        th.text-left PROBLEM
                                tbody.h-10
                                    tr.border
                                        td.pl-4(data-th="NAME") Asada
                                        td(data-th="BORROW") 23/11/2021
                                        td(data-th="RETURN") 25/11/2021
                                        td(data-th="PROBLEM") ปุ่ม Enter กดไม่ได
                                tbody.h-10
                                    tr.border
                                        td.pl-4(data-th="NAME") Werayut
                                        td(data-th="BORROW") 11/10/2021
                                        td(data-th="RETURN") 22/10/2021
                                        td(data-th="PROBLEM") ปุ่ม S ใช้ไม่ได้
                                        
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