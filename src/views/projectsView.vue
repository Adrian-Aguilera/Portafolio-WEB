<template>
    <boxComponent class="mt-6" title="Projects" :content="content" :data="datatoSend"></boxComponent>
</template>

<script>
import boxComponent from '@/components/boxComponent.vue';
export default {
    name: 'projectsView',
    components: {
        boxComponent
    },
    data: () => ({
        datatoSend: [
            {
                name: 'Portafolio Web',
                description: "This is a project that I'm currently working on. It's a web application that allows see the portfolio of my work.",
                github: 'https://github.com/Adrian-Aguilera',
                vsCode: 'https://github.dev/Adrian-Aguilera/Portafolio-WEB',
                technologies: [
                    {
                        title: 'Javascript',
                        disabled: false,
                        href: 'https://www.w3schools.com/js/default.asp',
                    },
                    {
                        title: 'Python',
                        disabled: false,
                        href: 'https://www.w3schools.com/js/default.asp',
                    },
                ],
                status: [
                    {
                        title: 'RUNNING',
                        color: 'success',
                        icon: 'bi bi-cpu-fill',
                    },
                    {
                        title: 'DEVELOPMENT',
                        color: 'warning',
                        icon: 'bi bi-terminal-fill',
                    },
                ],
                date: '2 DAY AGO UPDATED',
                tags: ['tag1', 'tag2', 'tag3'],
            },
        ],
        content: "A list of projects I've worked on in the last years. I'm currently working on a new project, so I'll add it here soon.",
    }),
    methods: {
        
    }
}
</script>