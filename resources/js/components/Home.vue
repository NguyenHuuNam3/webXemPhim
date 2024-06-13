<template>
    <div>
        <h1 class="w-full text-primary-hoverText uppercase my-3 text-lg font-medium">phim đề cử</h1>
        <div class="w-full mb-6 relative truncate">
            <CaretLeftOutlined @click="prev" class="z-10 absolute text-6xl top-1/4 left-0 text-primary-wrap opacity-50 cursor-pointer hover:opacity-90"/>
            <CaretRightOutlined @click="next" class="z-10 absolute text-6xl top-1/4 right-0 text-primary-wrap opacity-50 cursor-pointer hover:opacity-90"/>
            <div ref="list" class="flex w-[10000px] transition-transform duration-700 box-border">
                <div v-for="(item, index) in listDC" :key="index">
                    <Card :value="item"/>
                </div>
            </div>
        </div>
        <ListCard :value="listLe"/>
        <ListCard :value="listBo"/>
        <ListCard :value="listRap"/>
    </div>
</template>

<script>
import { CaretRightOutlined,CaretLeftOutlined } from '@ant-design/icons-vue'
import Card from './partials/Card.vue'
import ListCard from './partials/ListCard.vue'
    export default {
        name: 'Home',
        data: function() {
            return {
                x: 0,
                timer: null,
                listLe :{
                    name: 'phim lẻ mới',
                    list: [
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                        {videoID: "zoEtcR5EW08"},
                    ],
                },
                listBo: {
                    name: 'phim bộ mới',
                    list: [
                        {videoID: "4tYuIU7pLmI"},
                        {videoID: "4tYuIU7pLmI"},
                        {videoID: "4tYuIU7pLmI"},
                        {videoID: "4tYuIU7pLmI"},
                        {videoID: "4tYuIU7pLmI"},
                    ],
                },
                listRap: {
                    name: 'phim chiếu rạp mới',
                    list: [
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                        {videoID: "abPmZCZZrFA"},
                    ],
                },
                listDC: [
                    {videoID: "mzqvF_rIOx8"},
                    {videoID: "mzqvF_rIOx8",
                        name: 'dc',
                    },
                    {videoID: "mzqvF_rIOx8",
                        name: 'dc',
                    },
                    {videoID: "mzqvF_rIOx8",
                        name: 'dc',
                    },
                    {videoID: "mzqvF_rIOx8",
                        name: 'dc',
                    },
                    {videoID: "4tYuIU7pLmI",
                        name: 'dc',
                    },
                    {videoID: "4tYuIU7pLmI",
                        name: 'dc',
                    },
                    {videoID: "4tYuIU7pLmI",
                        name: 'dc',
                    },
                    {videoID: "4tYuIU7pLmI",
                        name: 'dc',
                    },
                    {videoID: "4tYuIU7pLmI",
                        name: 'dc',
                    },
                    {videoID: "abPmZCZZrFA",
                        name: 'dc',
                    },
                    {videoID: "abPmZCZZrFA",
                        name: 'dc',
                    },
                    {videoID: "abPmZCZZrFA",
                        name: 'dc',
                    },
                    {videoID: "abPmZCZZrFA",
                        name: 'dc',
                    },
                    {videoID: "abPmZCZZrFA",
                        name: 'dc',
                    },
                    {videoID: "zoEtcR5EW08",
                        name: 'dc',
                    },
                    {videoID: "zoEtcR5EW08",
                        name: 'dc',
                    },
                    {videoID: "zoEtcR5EW08",
                        name: 'dc',
                    },
                    {videoID: "zoEtcR5EW08",
                        name: 'dc',
                    },
                    {videoID: "zoEtcR5EW08",
                        name: 'dc',
                    },
                ]
            };
        },
        mounted() {
            this.timer = setInterval(() => {
                if(this.x <= -1160*3) {
                    this.x = 0
                } else {
                    this.x -= 1160
                }
                this.$refs.list.style.transform = `translateX(${this.x}px)`
            }, 8000);
        },
        components: {
            Card,
            ListCard,
            CaretLeftOutlined,
            CaretRightOutlined,
        },
        methods: {
            prev() {
                if(this.x >= 0) {
                    this.x = -1160 * 3
                } else {
                    this.x += 1160
                }
                this.$refs.list.style.transform = `translateX(${this.x}px)`
            },
            next() {
                if(this.x <= -1160*3) {
                    this.x = 0
                } else {
                    this.x -= 1160
                }
                this.$refs.list.style.transform = `translateX(${this.x}px)`
            },
        },
    };
</script>
