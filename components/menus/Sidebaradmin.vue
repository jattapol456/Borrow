<template lang="pug">
.flex.flex-col
    aside.bg-red-main.relative.h-full.min-h-screen.w-52
        nav.text-white.text-base.space-y-1
            nuxt-link(to="/admin/request")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Request
            nuxt-link(to="/admin/treasury")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Treasurys
            nuxt-link(to="/admin/latest") 
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Often
            nuxt-link(to="/admin/adddevice")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Add device
            nuxt-link(to="/admin/management")
                button(class="text-xl text-left pl-8 bg-red-main focus:bg-red-button1 focus:ring focus:ring-red-200 w-full h-16") Management

</template>
<script lang="js">
export default {}

</script>
