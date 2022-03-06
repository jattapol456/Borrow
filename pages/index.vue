<template lang="pug">
.section.w-full.h-screen.flex.flex-col-reveresed(class="md:main")
	img(src="/unnamed.jpg" alt="background" class="object-cover object-center h-screen w-7/12")
	.main.flex.items-center.justify-center.bg-white.w-full.p-2
		.bg-white.items-center
			.flex.justify-center
				h1.text-6xl.font-black.text-red-main.pt-16 IT
				h1.text-4xl.font-black.text-red-main.pt-20 SERVICE
				
			.w-full.max-w-xs
				.form.bg-white.rounded.px-8.pt-16.pb-8
					.pb-4.space-y-2
						p Email
						input(class="input" id="email" v-model="email").py-2.px-4
					.pb-4.space-y-2
						p Password
						input(class="input" id="password" v-model="password").py-2.px-4
					.pb-4(@click="login()")
						Buttonred.w-full.h-9 Log in
					.flex
						p.text-sm.mr-2 Don’t have an account	
						nuxt-link.text-sm.text-red-main(:to="{ path: '/register'}") Register	
					.flex 
						p.text-sm.mr-2 Login to	
						nuxt-link.text-sm.text-red-main(:to="{ path: '/loginadmin'}") Admin

</template>
]
<script lang="js">
import Buttonred from '../components/Buttonred.vue'

export default {
	layout: "layoutlogin",
	data() {
		return{
			email: "",
			password: "",
		}
	},
	components: {
        Buttonred,
    },
	methods: {
		
		async login(){
			const res = await this.$axios.post("http://localhost:3030/users/login",{
				email:this.email,
                password:this.password,
			})
			if(res.data.token){
				localStorage.setItem("token",res.data.token)
				this.$router.push("/user/")
			}

		}
	}
}
</script>

