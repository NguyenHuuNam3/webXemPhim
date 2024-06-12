<template>
    <img
        class="w-[216px] h-[150px] mr-2 cursor-pointer"
        :src="thumbnailUrl"
    />
</template>
<script>
    export default {
        name: 'Card',
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        computed: {
            thumbnailUrl() {
                console.log(this.value.videoID)
                return `https://img.youtube.com/vi/${this.value.videoID}/sddefault.jpg`;
            }
        }
    }
</script>
