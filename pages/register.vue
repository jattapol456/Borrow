<template lang="pug">
body
    .wrapper
        .form
            .main.w-full
                .bg-white
                    .flex.justify-center
                        h1.text-6xl.font-black.text-red-main IT
                        h1.text-4xl.font-black.text-red-main.pt-4 SERVICE
            .regis.pl-16
                .pt-10
                    a.text-xl Register
                    
                .px-12.pt-5
                    .pb-4.space-y-2
                        p Firstname
                        input(class="input" id="firstname").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Lastname
                        input(class="input" id="lastname").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Email
                        input(class="input" id="email").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Password
                        input(class="input" id="password").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Phone Number
                        input(class="input" id="phone_number").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Employee ID
                        input(class="input" id="employee_id").py-2.px-4.w-80
                                
                    .pb-4.space-y-2
                    <div class="form-group">
                        <label for="country" class="col-sm-2 control-label">Division</label>
                        <div class="col-sm-7">             
                            select(v-model="selectDivision").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                option(v-for="item in divisions" :value="item.name") {{ item.name }}
                        </div>
                    </div>    

                    .pb-4.space-y-2
                    <div class="form-group">
                        <label for="state" class="col-sm-2 control-label">Department</label>
                        <div class="col-sm-7">    
                            select(v-model="selectDepartment").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                    option(v-for="item in departments" :value="item") {{ item }}
                        </div>
                    </div>

                    .pb-4.pt-8
                        nuxt-link(to="/login")
                            Buttonred.w-80.h-10 Register
</template>

<script lang="js">
import Buttonred from '../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
	layout: "layoutlogin",
    data() {
        return {
            selectDivision: "",
            selectDepartment: "",
            divisions: [{
                name: "ADMINISTRATION DIVISION",
                departments: ["FINANCIAL PLANNING & COST CONTROL DEPT","HRM & ADMINISTRATION DEPARTMENT","PRODUCTION CONTROL DEPARTMENT","SAFETY AND ENVIRONMENT DEPARTMENT"]
            },
            {
                name: "MANUFACTURING AND ENGINEERING DIVISION",
                departments: ["DIESEL ENGINE MANUFACTURING DEPARTMENT","GASOLINE ENGINE MANUFACTURING DEPARTMENT","MANUFACTURING ENGINEERING DEPARTMENT"]
            },
            {
                name: "TDEM-ACCOUNTING & SHARED SERVICE CENTER",
                departments: ["TDEM-(BR) ACCOUNTING SYSTEM REFORM","TDEM-ACCOUNTING EXCELLENCE CENTER","TDEM-PERSONNEL & BUSINESS SERVICES","TDEM-VEHICLE PROFIT MANAGEMENT"]
            },
            {
                name: "TDEM-CUSTOMER SERVICE & QUALITY DIV",
                departments: ["TDEM-CUSTOMER QUALITY ENGINEERING","TDEM-CUSTOMER TECHNICAL SUPPORT"]
            },
            {
                name: "TDEM-HUMAN RESOURCES DIVISION",
                departments: ["TDEM-HUMAN RESOURCES","TDEM-REGIONAL HUMAN RESOURCES"]
            },
            {
                name: "TDEM-MFG COMPETITIVENESS ENHANCEMENT DIV",
                departments: ["TDEM-MFG REINFORCEMENT ASSIST"]
            },
            {
                name: "TDEM-POWERTRAIN ENGINEERING DIVISION",
                departments: ["TDEM-POWERTRAIN ENGINEERING NO.4"]
            },
            {
                name: "TDEM-PRODUCTION ENGINEERING PLANNING DIV",
                departments: ["TDEM-SAFETY PROMOTION"]
            },
            {
                name: "TDEM-PURCHASING DIVISION",
                departments: ["TDEM-MATERIAL, FACILITY & LOGISTIC PURCH","TDEM-UNIT PARTS PURCHASING"]
            },
            {
                name: "TDEM-PURCHASING ENGINEERING DIVISION",
                departments: ["TDEM-PURCHASING PARTS ENGINEERING","TDEM-SUPPLIER PERFORMANCE & PROJECT MANA"]
            },
            {
                name: "TDEM-PURCHASING ENGINEERING DIVISION",
                departments: ["TDEM-PURCHASING PARTS ENGINEERING","TDEM-SUPPLIER PERFORMANCE & PROJECT MANA"]
            },
            {
                name: "TDEM-ZEV,PRODUCT PLANNING & ADMIN",
                departments: ["TDEM-ZEV & TECHNICAL RESEARCH"]
            },
            ]
        }
    },
    computed: {
        departments(){
            if(this.selectDivision=="")return[]
            return this.divisions.find(d => d.name == this.selectDivision).departments
        }
    }
}

</script>

<style lang="scss" scoped>
.wrapper {	
	margin-top: 80px;
    margin-bottom: 80px;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 650px;
  margin: 0 auto 100px;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>