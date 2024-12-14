<template>
    <boxComponent title="Projects" :content="content" :data="datatoSend"></boxComponent>
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
                urlImage:require('@/assets/img/image.png'),
                vsCode: 'https://github.dev/Adrian-Aguilera/Portafolio-WEB',
                technologies: [
                    {
                        title: 'Javascript',
                        disabled: false,
                        href: 'https://www.w3schools.com/js/default.asp',
                    },
                    {
                        title: 'Vue.js',
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
                date: '1 DAY AGO UPDATED',
            },
            {
                name: 'Edula-Web',
                description: "This is a project Develop the 2024 innovation project as a lead programmer, adapting artificial intelligence technology for the educational section",
                github: 'https://github.com/Adrian-Aguilera/EdulA-Engine',
                urlImage:require('@/assets/img/edula.png'),
                vsCode: 'https://github.dev/Adrian-Aguilera/EdulA-Engine',
                technologies: [
                    {
                        title: 'python',
                        disabled: false,
                        href: 'https://www.w3schools.com/py/default.asp',
                    },
                    {
                        title: 'Django',
                        disabled: false,
                        href: 'https://www.w3schools.com/py/default.asp',
                    },
                    {
                        title: 'Django REST Framework',
                        disabled: false,
                        href: 'https://www.w3schools.com/py/default.asp',
                    },
                ],
                status: [
                    {
                        title: 'Done',
                        color: 'success',
                        icon: 'bi bi-cpu-fill',
                    },
                    {
                        title: 'DEVELOPMENT',
                        color: 'warning',
                        icon: 'bi bi-terminal-fill',
                    },
                ],
                date: '5 DAYs AGO UPDATED',
            },
        ],
        content: "A list of projects I've worked on in the last years. I'm currently working on a new project, so I'll add it here soon.",
    }),
    methods: {
        
    }
}
</script>