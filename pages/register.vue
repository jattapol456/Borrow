<template lang="pug">
body
    section.bg-gray-a
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
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text")
                        .pb-4.space-y-2
                            p Lastname
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text")
                        .pb-4.space-y-2
                            p Email
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text")
                        .pb-4.space-y-2
                            p Password
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text")
                        .pb-4.space-y-2
                            p Phone Number
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text")
                        .pb-4.space-y-2
                            p Employee ID
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text")
                        .pb-4.space-y-2
                            p Phone Division
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text")
                        .pb-4.space-y-2
                            p Department
                            input(class="shadow appearance-none border rounded py-2 px-4 w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text")
                        .pb-4.pt-2
                            nuxt-link(to="/")
                                button(class="focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200  w-80 h-10 text-white rounded") Register
                    
</template>

<script lang="js">
export default {
	layout: "layoutadmin"
}
</script>

<style lang="scss" scoped>
body {
    background: #EFEFEF;
}
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
</style>