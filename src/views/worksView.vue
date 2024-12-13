<template>
    <LineTimeComponent  title="Works" :content="content"></LineTimeComponent>
</template>

<script>
import LineTimeComponent from '@/components/LineTimeComponent.vue';
export default {
    name: 'worksView',
    components: {
        LineTimeComponent
    },
    data: () => ({
        content: "A list of works I've done in the last years. I'm currently working on a new project, so I'll add it here soon.",
    }),
    methods: {
        
    }
}
</script>