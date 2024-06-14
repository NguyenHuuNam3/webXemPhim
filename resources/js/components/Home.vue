<template>
    <div>
        <h1 class="w-full text-primary-hoverText uppercase my-3 text-lg font-medium">phim đề cử</h1>
        <div class="w-full mb-6 relative truncate">
            <CaretLeftOutlined @click="prev" class="z-10 absolute text-6xl top-1/4 left-0 text-primary-wrap opacity-50 cursor-pointer hover:opacity-90"/>
            <CaretRightOutlined @click="next" class="z-10 absolute text-6xl top-1/4 right-0 text-primary-wrap opacity-50 cursor-pointer hover:opacity-90"/>
            <div ref="list" class="flex w-[10000px] transition-transform duration-700 box-border">
                <div v-for="(item, index) in movies" :key="index">
                    <Card :value="item"/>
                </div>
            </div>
        </div>
        <ListCard :movies="movies" name="phim lẻ mới"/>
        <ListCard :movies="movies" name="phim bộ mới"/>
        <ListCard :movies="movies" name="phim chiếu rạp mới"/>
    </div>
</template>

<script>
import { CaretRightOutlined,CaretLeftOutlined } from '@ant-design/icons-vue'
import Card from './partials/Card.vue'
import ListCard from './partials/ListCard.vue'
import axios from 'axios';

    export default {
        name: 'Home',
        data: function() {
            return {
                x: 0,
                movies: [],
                timer: null,
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
        created() {
            axios.get('/api/movies')
            .then(response => {
                this.movies = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
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
