<template>
    <h1 class="w-full text-primary-hoverText uppercase my-3 text-lg font-medium"> {{ name }} </h1>
    <div class="w-full flex flex-wrap truncate justify-between mb-6">
        <div v-for="(item, index) in listLe" :key="index">
            <Card :value="item"/>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        name: 'ListCard',
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        components: {
            Card,
        }
        computed: {
            thumbnailUrl() {
                console.log(this.value.videoID)
                return `https://img.youtube.com/vi/${this.value.videoID}/sddefault.jpg`;
            }
        }
    }
</script>
