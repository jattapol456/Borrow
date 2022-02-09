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
                        Input(id="firstname").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Lastname
                        Input(id="lastname").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Email
                        Input(id="email").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Password
                        Input(id="password").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Phone Number
                        Input(id="phone_number").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Employee ID
                        Input(id="employee_id").py-2.px-4.w-80
                    .pb-4.space-y-2
                        p Division
                        .dropdown.inline-block.relative
                            button.bg-gray-200.text-gray-700.py-2.px-4.rounded.inline-flex.items-center
                                span.mr-1 Division
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            
                            ul.dropdown-menu.absolute.hidden.text-gray-700.pt-1
                                li(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap") One
                                li(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap") One
                                li(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap") One
                                
                    .pb-4.space-y-2
                        p Department
                        .dropdown.inline-block.relative
                            button.bg-gray-200.text-gray-700.py-2.px-4.rounded.inline-flex.items-center
                                span.mr-1 Department
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            
                            ul.dropdown-menu.absolute.hidden.text-gray-700.pt-1
                                li(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap") One
                                li(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap") One
                                li(class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap") One
                    .pb-4.pt-2
                        nuxt-link(to="/login")
                            Buttonred.w-80.h-10 Register
</template>

<script lang="js">
import Buttonred from '../components/Buttonred.vue'
import Input from '../components/Input.vue'

export default {
	components: {
        Buttonred,
        Input,
    },
	layout: "layoutlogin"
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