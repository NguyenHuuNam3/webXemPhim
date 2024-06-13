<template>
    <div class="w-full h-auto bg-primary-dark">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/">
                <div class="w-fit p-4 rounded-lg cursor-pointer">
                    <span class="text-primary-white font-bold">Nam</span>
                    <span class="p-1 bg-primary-wrap ml-1 rounded-lg font-bold">Hub</span>
                </div>
            </a>
            <div class="flex-1 mx-4 flex justify-between items-center">
                <div class="flex items-center">
                    <a class="group text-primary-white uppercase text-xs font-medium mx-2 h-10 leading-10 hover:opacity-85" href="/">
                        trang chủ
                        <div ref="home" class="ml-[5%] w-[90%] group-hover:animate-expand group-hover:transition-all group-hover:bg-gradient-to-r from-pink-600 to-amber-600 h-1"></div>
                    </a>
                    <a class="group text-primary-white uppercase text-xs font-medium mx-2 h-10 leading-10 hover:opacity-85" href="/contact">
                        liên hệ
                        <div ref="contact" class="ml-[5%] w-[90%] group-hover:animate-expand group-hover:transition-all group-hover:bg-gradient-to-r from-pink-600 to-amber-600 h-1"></div>
                    </a>
                </div>
                <div class="relative h-auto w-auto">
                    <input class="text-primary-white bg-primary-input p-2 pl-10 h-10 border-primary-border rounded-sm border" placeholder="Tìm: nhập tên 1 bộ phim"/>
                    <icon-search class="cursor-pointer absolute h-10 w-10 leading-10 text-primary-lightWhite left-0 text-center"/>
                </div>
            </div>
            <div>
                <button class="text-primary-white rounded-md mr-2 px-5 text-xs font-medium h-10 bg-primary-wrap hover:opacity-85">Đăng nhập</button>
            </div>
        </div>
    </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue'
export default {
    mounted() {
        if(window.location.href.split('/')[3] == "") {
            this.$refs.home.classList.add('bg-gradient-to-r');
            this.$refs.home.classList.add('from-pink-600');
            this.$refs.home.classList.add('to-amber-600');
        } else if(window.location.href.split('/')[3] == "contact") {
            this.$refs.contact.classList.add('bg-gradient-to-r');
            this.$refs.contact.classList.add('from-pink-600');
            this.$refs.contact.classList.add('to-amber-600');
        }
    },
    name: 'Header',
    components: {
        'icon-search': SearchOutlined
    }
};
</script>
