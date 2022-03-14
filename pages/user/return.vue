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
        
                                
</template>

<script lang="js">
export default {
    data(){
        return {
            items: {},
            user: {},
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

</style>