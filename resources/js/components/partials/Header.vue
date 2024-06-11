<template>
    <div class="w-full h-auto bg-slate-900">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/">
                <div class="w-fit p-4 rounded-lg cursor-pointer">
                    <span class="text-white font-bold">Nam</span>
                    <span class="p-1 bg-amber-600 ml-1 rounded-lg font-bold">Hub</span>
                </div>
            </a>

            <div class="flex-1 mx-4 flex justify-between items-center">
                <div class="flex items-center">
                    <a class="text-white uppercase text-xs font-medium mx-2 h-10 leading-10 hover:opacity-85" href="/">trang chủ</a>
                    <a class="text-white uppercase text-xs font-medium mx-2 h-10 leading-10 hover:opacity-85" href="#">trang chủ</a>
                    <a class="text-white uppercase text-xs font-medium mx-2 h-10 leading-10 hover:opacity-85" href="#">trang chủ</a>
                    <a class="text-white uppercase text-xs font-medium mx-2 h-10 leading-10 hover:opacity-85" href="#">trang chủ</a>
                </div>
                <div class="relative h-auto w-auto">
                    <input class="text-white bg-slate-950 p-2 pl-10 h-10 border-slate-500 rounded-sm border" placeholder="Tìm: nhập tên 1 bộ phim"/>
                    <icon-search class="cursor-pointer absolute h-10 w-10 leading-10 text-white left-0 text-center"/>
                </div>
            </div>

            <div>
                <button class="text-white rounded-md mr-2 px-5 text-xs font-medium h-10 bg-amber-700 hover:opacity-85">Đăng nhập</button>
            </div>
        </div>
    </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue'
export default {
  name: 'Header',
  components: {
    'icon-search': SearchOutlined
  }
};
</script>
