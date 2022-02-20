<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-4
                .grid.grid-cols-2(class="lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5")
                    .border.bg-white.border-gray-500
                        nuxt-link(to="/item")
                            .flex.justify-between.pl-2.pr-2
                                .flex.space-x-1
                                    p ID:
                                    p 001
                                p AVAILABLE
                            .flex.justify-center
                                img.max-h-36.w-36.bg-white.object-contain.rounded-t-xl(src="~static/imgs/keyboard.png" alt="")
                            .p-5.space-y-2
                                .flex.space-x-2
                                    p Item
                                    p Keyboard
                                
                                p Problem
                                .flex.items-center.space-x-2
                                    p.pl-8 *
                                    p.text-sm Keyboard
                                    
                    .border.bg-white.border-gray-500
                        nuxt-link(to="/item")
                            .flex.justify-between.pl-2.pr-2
                                .flex.space-x-1
                                    p ID:
                                    p 001
                                p AVAILABLE
                            .flex.justify-center
                                img.max-h-36.w-36.bg-white.object-contain.rounded-t-xl(src="~static/imgs/keyboard.png" alt="")
                            .p-5.space-y-2
                                .flex.space-x-2
                                    p Item
                                    p Keyboard
                                
                                p Problem
                                .flex.items-center.space-x-2
                                    p.pl-8 *
                                    p.text-sm Keyboard
                                
                        
</template>

<script lang="js">
export default {

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