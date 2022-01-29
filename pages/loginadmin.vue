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
						input(class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text")
					.pb-4.space-y-2
						p Password
						input(class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text")
					.pb-4
						nuxt-link(to="/request")
							button(class="focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-full h-9 text-white rounded") Log in
					.flex
						p.text-sm.mr-2 Login to	
						nuxt-link.text-sm.text-red-main(:to="{ path: '/login'}") User

</template>
]
<script lang="js">
export default {
	layout: "layoutlogin"
}
</script>

<style lang="postcss" scoped>
.login-with {
	@apply hover:bg-red-400 hover:text-white;
}
</style>
