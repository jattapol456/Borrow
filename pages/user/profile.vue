<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-6
                .pl-20
                    .flex.justify-between.pr-20
                        img(:src="user.profileimg").h-44.object-cover.rounded-full
                        a(type="button" class="text-center focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-32 h-10 pt-2 text-white rounded" href="#popupedit") Edit 
                    .pt-6.space-y-4
                        .flex.space-x-4
                            p Name : 
                            p {{ user.firstname }} {{ user.lastname }}
                        .flex.space-x-4
                            p Employee ID : 
                            p {{ user.employee_id }}
                        .flex.space-x-4
                            p Division : 
                            p {{ user.division }}
                        .flex.space-x-4
                            p Department : 
                            p {{ user.department }}
                        .flex.space-x-4
                            p Section : 
                            p {{ user.section }}
                        .flex.space-x-4
                            p Email : 
                            p {{ user.email }}
                        .flex.space-x-4
                            p Phone Number : 
                            p {{ user.phone_number }}
                        p Borrowing History :
                        .pl-10.pr-20.table-container
                            table.table-auto.w-full.border
                                thead.h-12
                                    tr.border
                                        th.pl-4.text-left EQUIPMENT
                                        th.text-left BORROW
                                        th.text-left RETURN
                                        th.text-left STATUS
                                        th.text-left ACTION
                                tbody.h-10
                                    tr.border(v-for="item in items" :key="item._id")
                                        td.pl-4 {{item.item_id.name}}
                                        td(data-th="BORROW") {{item.dateborrow}}
                                        td(data-th="RETURN") {{item.datereturn}}
                                        td(data-th="STATUS") {{item.status}}
                                        td
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
            .popupedit(id="popupedit")
                .popupedit-inner
                    .pl-24
                        .flex.justify-center.pt-4
                            .borrow.flex.justify-center.items-center.p-10.border-red-main.border-2.space-x-28
                                .space-y-4
                                    .flex.space-x-2
                                        .pb-4.space-y-2
                                            p Firstname
                                            input(class="input" v-model="firstname").py-2.px-4.w-80
                                        .pb-4.space-y-2
                                            p Lastname
                                            input(class="input" v-model="lastname").py-2.px-4.w-80
                                    .pb-4.space-y-2
                                        p Phone Number
                                        input(class="input" v-model="phone_number").py-2.px-4.w-80 
                                    .pb-4.space-y-2
                                        .form-group
                                            label(for="country" class="col-sm-2 control-label") Division
                                            .col-sm-7          
                                                select(v-model="selectDivision").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                                    option(v-for="item in divisions" :value="item.name") {{ item.name }}  
                                    .flex.space-x-2 
                                        .pb-4.space-y-2
                                            .form-group
                                                label(for="state" class="col-sm-2 control-label") Department
                                                .col-sm-7  
                                                    select(v-model="selectDepartment").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                                            option(v-for="item in department" :value="item.name") {{ item.name }}
                                        .pb-4.space-y-2
                                            .form-group
                                                label(for="state" class="col-sm-2 control-label") Section
                                                .col-sm-7  
                                                    select(v-model="selectSection").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                                            option(v-for="item in sections" :value="item") {{ item }}
                        .flex.justify-center.pt-8(@click="submitedit()")
                            Buttonred.w-60.h-10 Edit
                    a.popup__close(href="#") X        
</template>

<script lang="js">
import Buttonred from '../../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
    data(){
        return{
            items:[],
            selectitem: null,
            returnborrow: "",
            datereturn: "",
            user: {},
            firstname: "",
            lastname: "",
            phone_number: "",
            selectDivision: "",
            selectDepartment: "",
            selectSection: "",
            divisions: [
                {
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
                }
            ],
            department: [
                {
                    name: "(SIAM TOYOTA MANUFACTURING DEPARTMENT)",
                    sections: ["CORPORATE INTERNAL AUDIT SECTION"]
                },
                {
                    name: "QUALITY ASSURANCE AND SUPPLIER DEV DEPT",
                    sections: ["CUSTOMER SERVICE & QUALITY INNO SEC","IN-HOUSE QC SECTION","PART COST IMPROVEMENT SECTION","QUALITY AUDIT SECTION","SUPPLIER 3 PILLARS SECTION"]
                },
                {
                    name: "(ADMINISTRATION DEPARTMENT)",
                    sections: ["CORPORATE PLANNING SECTION"]
                },
                {
                    name: "FINANCIAL PLANNING & COST CONTROL DEPT",
                    sections: ["COST CONTROL SECTION","COST CONTROL SECTION"]
                },
                {
                    name: "HRM & ADMINISTRATION DEPARTMENT",
                    sections: ["(HRA SEC)","CORPORATE AFFAIRS SECTION","DIGITALIZATION DEVELOPMENT SECTION","EMPLOYEE RELATIONS SECTION","FACILITY SUPPORT SECTION","HUMAN RESOURCES DEVELOPMENT SECT","HUMAN RESOURCES SECTION"]
                },
                {
                    name: "PRODUCTION CONTROL DEPARTMENT",
                    sections: ["(PCD SEC)","DIESEL LOGISTICS AND WAREHOUSE 2 SECT","ENGINE DELIVERY CONTROL & PACKING SECT","GASOLINE LOGISTICS AND WAREHOUSE 1 SECT","GENERAL STORE MANAGEMENT SECTION","LOGISTICS ENGINEERING SECTION","PRODUCTION PLANNING SECTION"]
                },
                {
                    name: "SAFETY AND ENVIRONMENT DEPARTMENT",
                    sections: ["SAFETY & ENV. SEC"]
                },
                {
                    name: "(MANUFACTURING AND ENGINEERING DEPT)",
                    sections: ["(PLANT ADMINISTRATION SEC)","PLANT ADMINISTRATION SECTION"]
                },
                {
                    name: "DIESEL ENGINE MANUFACTURING DEPARTMENT",
                    sections: ["(DIESEL SEC)","PLANT ADMINISTRATION SECTION"]
                },
                {
                    name: "DIESEL ENGINE MANUFACTURING DEPARTMENT",
                    sections: ["(DIESEL SEC)","DIESEL ASSEMBLY (D2 D3 D4) SECTION","DIESEL MACHINING (D2 D3 D4) SECTION","IRON CASTING SECTION"]
                },
                {
                    name: "GASOLINE ENGINE MANUFACTURING DEPARTMENT",
                    sections: ["(GASOLINE SEC)","ALUMINIUM CT (GASOLINE & DIESEL) SECTION","GASOLINE E11 SECTION","GASOLINE E12 SECTION","GASOLINE E21 SECTION"]
                },
                {
                    name: "MANUFACTURING ENGINEERING DEPARTMENT",
                    sections: ["(TOOL & PATTERN SEC)","CASTING MANUFACTURING ENGINEERING SECT","DIESEL ENGINEERING SECTION","GASOLINE ENGINEERING SECTION","INNOVATION AI SECTION","INNOVATION AUTOMATION SECTION","PATTERN MANAGEMENT SECTION","SMART TECHNOLOGY SUPPORT SECTION","TOOL MANAGEMENT SECTION"]
                },
                {
                    name: "TDEM-(BR) ACCOUNTING SYSTEM REFORM",
                    sections: ["TDEM-(BR) FINANCIAL ACCOUNTING SYSTEM"]
                },
                {
                    name: "TDEM-ACCOUNTING EXCELLENCE CENTER",
                    sections: ["TDEM-ACCOUNT PAYABLE & INVENTORY ACCOUNT","TDEM-ACCOUNT RECEIVABLE & GENERAL ACCOUN","TDEM-FIXED ASSET ACCOUNTING & COLLECTION"]
                },
                {
                    name: "TDEM-PERSONNEL & BUSINESS SERVICES",
                    sections: ["TDEM-TRAVEL &ICT/EXPAT MANAGEMENT"]
                },
                {
                    name: "TDEM-VEHICLE PROFIT MANAGEMENT",
                    sections: ["TDEM-VEHICLE PROFIT MANAGEMENT 1"]
                },
                {
                    name: "TDEM-CUSTOMER QUALITY ENGINEERING",
                    sections: ["TDEM-VEHICLE QUALITY 1"]
                },
                {
                    name: "TDEM-CUSTOMER TECHNICAL SUPPORT",
                    sections: ["TDEM-VOC & INNOVATION SOLUTION"]
                },
                {
                    name: "TDEM-HUMAN RESOURCES",
                    sections: ["TDEM-RESOURCES MANAGEMENT","TDEM-TOYOTA LEARNING CENTER"]
                },
                {
                    name: "TDEM-REGIONAL HUMAN RESOURCES",
                    sections: ["TDEM-EXECUTIVE & TALENT MANAGEMENT SEC","TDEM-REGIONAL RESOURCES PLANNING","TDEM-REGIONAL TALENT DEVELOPMENT & COMMU"]
                },
                {
                    name: "TDEM-MFG REINFORCEMENT ASSIST",
                    sections: ["TDEM-UNIT ASSIST"]
                },
                {
                    name: "TDEM-POWERTRAIN ENGINEERING NO.4",
                    sections: ["TDEM-POWERTRAIN TESTING"]
                },
                {
                    name: "TDEM-SAFETY PROMOTION",
                    sections: ["TDEM-SAFETY ENGINEERING"]
                },
                {
                    name: "TDEM-MATERIAL, FACILITY & LOGISTIC PURCH",
                    sections: ["TDEM-GENERAL INDIRECT PURCHASING"]
                },
                {
                    name: "TDEM-UNIT PARTS PURCHASING",
                    sections: ["TDEM-ENGINE & CASTING FORGING"]
                },
                {
                    name: "TDEM-PURCHASING PARTS ENGINEERING",
                    sections: ["TDEM-UNIT & STAMPING & CHASSIS PARTS ENG"]
                },
                {
                    name: "TDEM-SUPPLIER PERFORMANCE & PROJECT MANA",
                    sections: ["TDEM-SUPPLIER PROJECT MANAGEMENT"]
                },
                {
                    name: "TDEM-ZEV & TECHNICAL RESEARCH",
                    sections: ["TDEM-TECHNICAL RESEARCH & PLANNING"]
                },
            ],
        }
    },
    computed: {
        departments(){
            if(this.selectDivision=="")return[]
            return this.divisions.find(d => d.name == this.selectDivision).departments
        },
        sections(){
            if(this.selectDepartment=="")return[]
            return this.department.find(c => c.name == this.selectDepartment).sections
        },
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
        async submitedit() {
            const res = await this.$axios.patch(
                `http://localhost:3030/users/editprofile`,{
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone_number: this.phone_number,
                    division:this.selectDivision,
                    department:this.selectDepartment,
                    section:this.selectSection
                },
                {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}},
                location.reload()
            )
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
.popupedit {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: 0.64s ease-in-out;
  &-inner {
    position: relative;
    bottom: -100vw;
    right: -100vh;
    display: flex;
    align-items: center;
    max-width: 920px;
    max-height: 1000px;
    width: 80%;
    height: 80%;
    background-color: #fff;
    transform: rotate(32deg);
    transition: 0.64s ease-in-out;
  }
  &:target {
    visibility: visible;
    opacity: 1;
    .popupedit-inner {
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
    font-size: 0.875rem;
    font-weight: 300;
    border-radius: 100%;
    background-color: #0a0a0a;
    z-index: 4;
    color: #fff;
    line-height: 3rem;
    text-align: center;
  }
}
</style>