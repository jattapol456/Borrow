<template lang="pug">
.flex.flex-col
    aside.bg-red-main.relative.h-full.w-52
        nav.text-white.text-base.space-y-1
            nuxt-link(to="/")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Request
            nuxt-link(to="/treasury")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Treasury
            nuxt-link(to="/latest") 
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Latest
            nuxt-link(to="/frequent")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Frequent
            nuxt-link(to="/adddevice")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Add device

</template>
<script lang="js">
export default {}

</script>
