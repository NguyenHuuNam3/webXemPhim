<template>
    <a :href="linkMovie" :class="classCard">
        <div class="relative w-full h-full overflow-hidden">
            <img
                class="group-hover:scale-125 transition-transform duration-300 w-full h-full cursor-pointer"
                :src="thumbnailUrl" />
            <div class="absolute bottom-0 w-full bg-black opacity-65">
                <p class="whitespace-nowrap capitalize text-ellipsis text-primary-white w-[90%] pb-2 pt-1 ml-3 overflow-hidden box-border">
                    {{ value.name }}
                </p>
            </div>
            <PlayCircleOutlined class="group-hover:scale-100 group-hover:opacity-80 transform scale-50 opacity-0 transition-all duration-400 ease-linear absolute text-5xl text-primary-wrap top-1/4 left-0 right-0"/>
        </div>
    </a>
</template>
<script>
import {PlayCircleOutlined} from '@ant-design/icons-vue'
    export default {
        name: 'Card',
        props: {
            value: {
                type: Object,
                required: true
            },
            customClass: {
                type: String,
                required: false,
                default: '',
            }
        },
        computed: {
            thumbnailUrl() {
                return `https://img.youtube.com/vi/${this.value.video}/sddefault.jpg`;
            },
            classCard() {
                return `${this.customClass} group relative block w-[220px] h-[150px]`;
            },
            linkMovie() {
                return `/movies/${this.value.name.replace(/ /g, '-')}-p${this.value.id}`
            },
        },
        components: {
            PlayCircleOutlined,
        },
    }
</script>
