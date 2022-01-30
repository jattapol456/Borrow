<template lang="pug">
body
    .pt-14.pl-20
        .wrapper.pl-6
            form
                .pl-16.pt-10.space-y-10
                    div
                        div(v-if="!image").space-y-4
                            h2 Select an image
                            input(type="file" @change="onFileChange")
                        div(v-else).flex.items-end.space-x-4
                            img(:src="image")
                            button.text-red-main.pb-1(@click="removeImage") Remove image
                    .pr-96.space-y-10
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Item :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Brand :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Model :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                        .flex.justify-end.items-center.space-x-4.pr-80
                            p Code IP :
                            input(class="shadow border-2 border-grayBG rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text")
                    .flex.justify-center.pt-2
                        button(class="focus:outline-none bg-red-main focus:bg-red-500 focus:ring focus:ring-red-200 w-60 h-10 text-white rounded") SEND REQUEST 

</template>

<script lang="js">
export default {
    layout: "layoutadmin",
    data: () => {
        return {
            image: ""
        }
    },
    methods: {
        onFileChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length) 
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            const reader = new FileReader();
            const vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage (e) {
            this.image = "";
        }
    }
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
img {
  width: 200px;
  display: block;
  margin-bottom: 10px;
}

</style>