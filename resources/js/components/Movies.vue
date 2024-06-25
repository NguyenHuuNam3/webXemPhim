<template>
    <div class="">
        <Path :path="pathCurr"></Path>
        <div class="flex justify-between">
            <div class="w-fit h-fit bg-primary-wrap text-lg my-2 rounded-sm px-4 py-2 uppercase">
                <p>danh sách tất cả các bộ phim</p>
            </div>
            <div class="bg-primary-lightWhite w-fit h-fit text-lg my-2 rounded-sm px-4 py-2 uppercase">
                <p>lọc</p>
            </div>
        </div>
        <Pagination></Pagination>
    </div>
</template>

<script>
import { CaretRightOutlined,CaretLeftOutlined } from '@ant-design/icons-vue'
import Card from './partials/Card.vue'
import ListCard from './partials/ListCard.vue'
import Path from './partials/Path.vue'
import Pagination from './partials/Pagination.vue'
import axios from 'axios';

    export default {
        name: 'Movies',
        data: function() {
            return {
                pathCurr: [{
                    name: 'danh sách tất cả các bộ phim',
                    path: '/movies',
                }],
            };
        },
        mounted() {

        },
        created() {
            this.getApi()
        },
        components: {
            Card,
            Path,
            ListCard,
            Pagination,
            CaretLeftOutlined,
            CaretRightOutlined,
        },
        methods: {
            prev() {

            },
            next() {

            },
            async getApi() {
                try {
                    const response = await axios.get('/api/movies');
                    this.movies = response.data;
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        },
    };
</script>
