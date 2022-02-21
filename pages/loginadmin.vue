<template lang="pug">
.section.w-full.h-screen.flex.flex-col-reveresed
	img(src="/unnamed.jpg" alt="background" class="object-cover object-center h-screen w-7/12")
	.main.flex.items-center.justify-center.bg-white.w-full.p-2
		.bg-white.items-center
			.flex.justify-center
				h1.text-6xl.font-black.text-red-main.pt-16 IT
				h1.text-4xl.font-black.text-red-main.pt-20 SERVICE
			.w-full.max-w-xs
				.pl-48.mb-2
					p ADMIN
				.form.bg-white.rounded.px-8.pt-6.pb-8
					.pb-4.space-y-2
						p Email
						input(class="input" id="email").py-2.px-4
					.pb-4.space-y-2
						p Password
						input(class="input" id="password").py-2.px-4
					.pb-4
						nuxt-link(to="/request")
							Buttonred.w-full.h-9 Log in
					.flex
						p.text-sm.mr-2 Login to	
						nuxt-link.text-sm.text-red-main(:to="{ path: '/login'}") User

</template>
]
<script lang="js">
import Buttonred from '../components/Buttonred.vue'

export default {
	components: {
        Buttonred,
    },
	layout: "layoutlogin"
}
</script>

<style lang="postcss" scoped>
.login-with {
	@apply hover:bg-red-400 hover:text-white;
}
</style>
