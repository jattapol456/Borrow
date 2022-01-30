<template lang="pug">
body
    .pt-14.pl-20
        h1 Borrow
        .wrapper.pl-6
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
                                        .bg-gray-a.rounded-full.p-1
                                            img(src="~static/icons/eye.svg").object-cover.h-5.w-5
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
                                        .bg-gray-a.rounded-full.p-1
                                            img(src="~static/icons/eye.svg").object-cover.h-5.w-5
                                        .bg-red-main.rounded-full.p-1
                                            img(src="~static/icons/bin.svg").object-cover.h-5.w-5




</template>

<script lang="js">
export default {
    layout: "layoutadmin",
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