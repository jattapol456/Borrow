<template lang="pug">
body.bg-gray-a
    .pt-14.pl-20
        .wrapper.pl-6
            form.p-4
                .grid.grid-cols-2(class="lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5")
                    .border.bg-white.border-gray-a
                        nuxt-link(to="")
                            .flex.justify-between.pl-2.pr-2
                                .flex.space-x-1
                                    p ID:
                                    p 001
                                p AVAILABLE
                            img.max-h-50.w-50.bg-white.object-contain.rounded-t-xl(src="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png" alt="")
                            .p-5.space-y-2
                                .flex.space-x-2
                                    p Item
                                    p Keyboard
                                
                                p Problem
                                .flex.items-center.space-x-2
                                    p.pl-8 *
                                    p Keyboard
                                    
                    .border.bg-white.border-gray-a
                        nuxt-link(to="")
                            .flex.justify-between.pl-2.pr-2
                                .flex.space-x-1
                                    p ID:
                                    p 001
                                p AVAILABLE
                            img.max-h-50.w-50.bg-white.object-contain.rounded-t-xl(src="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png" alt="")
                            .p-5.space-y-2
                                .flex.space-x-2
                                    p Item
                                    p Keyboard
                                
                                p Problem
                                .flex.items-center.space-x-2
                                    p.pl-8 *
                                    p Keyboard
                                
                        
                    
                    


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