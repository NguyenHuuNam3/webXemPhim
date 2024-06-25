<template>
    <div class="text-primary-white capitalize text-sm flex items-center">
        <a href="/" class="flex items-center cursor-pointer hover:opacity-70">
            <HomeFilled class="mr-1"/>
            trang chủ
        </a>
        <a v-for="(item, index) in path" :key="index" :href="item.path" class="group flex items-center cursor-pointer">
            <span class="mx-2.5">/</span>
            <span class="group-hover:opacity-70">{{ item.name }}</span>
        </a>
    </div>
</template>

<script>
import { HomeFilled } from '@ant-design/icons-vue'
    export default {
        name: 'Path',
        props: {
            path: {
                type: Array,
                required: true
            },
        },
        data: function() {
            return {

            };
        },
        mounted() {

        },
        components: {
            HomeFilled,
        },
        methods: {

        },
    };
</script>
