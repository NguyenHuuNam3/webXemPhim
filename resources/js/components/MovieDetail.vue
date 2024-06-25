<template>
  <div class="w-[80%] p-0 pb-8">
    <p class="text-primary-white mx-3 py-2">{{ movie.name }}</p>
    <div class="flex w-auto h-full">
        <div class="w-1/2 flex-1 relative mr-2">
            <img class="w-full h-full" :src="thumbnailUrl"/>
            <div class="flex justify-center items-center absolute bottom-0 w-full h-auto mb-2">
                <a class="hover:opacity-85 w-auto h-auto py-2 px-4 rounded-sm ml-2 cursor-pointer flex items-center bg-primary-btnBlue text-primary-white">
                    <HeartTwoTone twoToneColor="#b71c1c" class="text-lg h-[32px]"/>
                    <HeartFilled class="text-primary-btnRed"/>
                    <span class="ml-2 text-lg text-bold">Thêm vào yêu thích</span>
                </a>
                <a class="hover:opacity-85 w-auto h-auto py-2 px-4 rounded-sm ml-2 cursor-pointer flex items-center bg-primary-btnRed text-primary-white">
                    <PlayCircleOutlined class="text-lg h-[32px]"/>
                    <span class="ml-2 text-lg text-bold">Xem phim</span>
                </a>
            </div>
        </div>
        <div class="w-1/2 flex-1 ml-2 bg-primary">
            <div class="h-auto w-full bg-primary-content pb-1 flex justify-around">
                <span class="text-primary-text cursor-pointer hover:opacity-85">Thông tin phim</span>
                <span class="text-primary-white cursor-pointer hover:opacity-85">Diễn viên</span>
                <span class="text-primary-white cursor-pointer hover:opacity-85">Trailer</span>
                <span class="text-primary-white cursor-pointer hover:opacity-85">khác</span>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios'
    import { PlayCircleOutlined, HeartFilled } from '@ant-design/icons-vue'
    export default {
        name: 'MovieDetail',
        data() {
            return {
                movie: {},
            };
        },
        computed: {
            movieName() {
                const index = this.$route.params.id.indexOf('p');
                return index !== -1 ? this.$route.params.id.slice(index + 1) : null
            },
            thumbnailUrl() {
                return `https://img.youtube.com/vi/${this.movie.video}/maxresdefault.jpg`;
            },
        },
        created() {
            this.getApi()
        },
        methods: {
            async getApi() {
                try {
                    const response = await axios.get(`/api/movies/${this.movieName}`);
                    this.movie = response.data;
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        },
        components: {
            HeartFilled,
            PlayCircleOutlined,
        }
    }
</script>
