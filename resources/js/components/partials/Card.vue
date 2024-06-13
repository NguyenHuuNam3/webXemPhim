<template>
    <img
        ref="card"
        class="w-[216px] h-[150px] mr-2 mb-3 cursor-pointer"
        :src="thumbnailUrl"
    />
</template>
<script>
    export default {
        name: 'Card',
        mounted() {
            if(this.value.name == 'dc') {
                console.log()
                this.$refs.card.classList.add('mx-2')
                this.$refs.card.classList.remove('mr-2')
            }
        },
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        computed: {
            thumbnailUrl() {
                return `https://img.youtube.com/vi/${this.value.videoID}/sddefault.jpg`;
            }
        }
    }
</script>
