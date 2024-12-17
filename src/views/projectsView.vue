<template>
    <boxComponent title="Projects" :content="content" :data="datatoSend"></boxComponent>
</template>

<script>
import boxComponent from '@/components/boxComponent.vue';
import api from '@/api/api.js';
export default {
    name: 'projectsView',
    components: {
        boxComponent
    },
    data: () => ({
        content: "A list of projects I've worked on in the last years. I'm currently working on a new project, so I'll add it here soon.",
        datatoSend: [],
    }),
    methods: {
        getProjects() {
            api.get('api/v1/projects')
            .then((response) => {
                this.datatoSend = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },
    created() {
        this.getProjects();
    },
}
</script>