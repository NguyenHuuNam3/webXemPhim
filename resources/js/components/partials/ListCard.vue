<template>
    <h1 class="w-full text-primary-hoverText uppercase my-3 text-lg font-medium">{{ value.name }}</h1>
    <div class="w-full flex flex-wrap truncate justify-between mb-6">
        <div v-for="(item, index) in value.list" :key="index">
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
        },
    }
</script>
