<template lang="pug">
.section.w-full.h-screen.flex.flex-col-reveresed
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
						input(class="shadow appearance-none border bg-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text")
					.pb-4.space-y-2
						p Password
						input(class="shadow appearance-none border bg-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text")
					.pb-4
						nuxt-link(to="/")
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
	components: {
        Buttonred,
    },
	layout: "layoutlogin",
}
</script>

