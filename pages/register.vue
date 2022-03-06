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
                        input(class="input" id="firstname" v-model="firstname").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Lastname
                        input(class="input" id="lastname" v-model="lastname").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Email
                        input(class="input" id="email" v-model="email").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Password
                        input(class="input" id="password" v-model="password").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Phone Number
                        input(class="input" id="phone_number" v-model="phone_number").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Employee ID
                        input(class="input" id="employee_id" v-model="employee_id").py-2.px-4.w-80
                                
                    .pb-4.space-y-2
                        .form-group
                            label(for="country" class="col-sm-2 control-label") Division
                            .col-sm-7          
                                select(v-model="selectDivision").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                    option(v-for="item in divisions" :value="item.name") {{ item.name }}
                            
                    .pb-4.space-y-2
                        .form-group
                            label(for="state" class="col-sm-2 control-label") Department
                            .col-sm-7  
                                select(v-model="selectDepartment").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                        option(v-for="item in departments" :value="item") {{ item }}
                        
                    .pb-4.space-y-2
                        .form-group
                            label(for="state" class="col-sm-2 control-label") Section
                            .col-sm-7  
                                select(v-model="selectSection").text-gray-700.py-2.px-4.rounded.inline-flex.items-center.w-80.shadow.border-2
                                        option(v-for="item in sections" :value="item") {{ item }}
                                            
                    .pb-4.space-y-2
                        div(v-if="!image").space-y-4
                            h2 Profile image
                            input(type="file" @change="onFileChange")
                        div(v-else).flex.items-end.space-x-4
                            img(:src="image").h-32.w-32
                            button.text-red-main.pb-1(@click="removeImage") Remove image

                    .pb-4.pt-8(@click="register()")
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
            selectSection: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone_number: "",
            employee_id: "",
            files: "",
            image: "",
            divisions: [
                {
                    name: "(SIAM TOYOTA MANUFACTURING DIV)",
                    departments: ["(SIAM TOYOTA MANUFACTURING DEPARTMENT)","QUALITY ASSURANCE AND SUPPLIER DEV DEPT"]
                },
                {
                    name: "ADMINISTRATION DIVISION",
                    departments: ["(ADMINISTRATION DEPARTMENT)","FINANCIAL PLANNING & COST CONTROL DEPT","HRM & ADMINISTRATION DEPARTMENT","PRODUCTION CONTROL DEPARTMENT","SAFETY AND ENVIRONMENT DEPARTMENT"]
                },
                {
                    name: "MANUFACTURING AND ENGINEERING DIVISION",
                    departments: ["(MANUFACTURING AND ENGINEERING DEPT)","DIESEL ENGINE MANUFACTURING DEPARTMENT","GASOLINE ENGINE MANUFACTURING DEPARTMENT","MANUFACTURING ENGINEERING DEPARTMENT"]
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
            ]
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
    methods: {
        onFileChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length) 
                return;
            this.createImage(files[0]);
            this.files=files[0]
        },
        createImage(file) {
            const reader = new FileReader();
            const vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage (e) {
            this.image = "";
        },
        async register(){
            const ref = this.$fire.storage.ref().child(`profileimg/${this.files.name}`);
            await ref.put(this.files)
            const url = await ref.getDownloadURL()
            await this.$axios.post("http://localhost:3030/users/",{
                firstname:this.firstname,
                lastname:this.lastname,
                email:this.email,
                password:this.password,
                phone_number:this.phone_number,
                employee_id:this.employee_id,
                division:this.selectDivision,
                department:this.selectDepartment,
                section:this.selectSection,
                profileimg: url
                })
            this.$router.push("/")
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
  background: #ffffff;
  max-width: 650px;
  margin: 0 auto 100px;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
