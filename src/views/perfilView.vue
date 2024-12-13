<template>
    <PerfilComponent :myself="myself" title="Perfil" :skills="skills"></PerfilComponent>
</template>

<script>
import PerfilComponent from '@/components/PerfilComponent.vue';
export default {
    name: 'perfilView',
    components: {
        PerfilComponent
    },
    data: () => ({
        myself: "I am a developer specializing mainly in Python, building and developing microservices with Django REST Framework. Website development with Vue.js framework. Scripting development using Python. Enthusiast and AI developer using libraries like ollama",
        skills: [
            {
                title: 'Stacks',
                technologies: [
                    {
                        title: 'Python',
                        icon: 'mdi mdi-language-python',
                    },
                    {
                        title: 'Javascript',
                        icon: 'mdi mdi-language-javascript',
                    },
                    {
                        title: 'php',
                        icon: 'mdi mdi-language-php',
                    },
                    {
                        title: 'Wordpress',
                        icon: 'bi bi-wordpress',
                    },
                    {
                        title: 'Ubuntu',
                        icon: 'bi bi-ubuntu',
                    },
                    {
                        title: 'Digital Ocean',
                        icon: 'bi bi-cloud-plus-fill',
                    },
                ],
                frameworks: [
                    {
                        title: 'Django',
                        icon: 'bi bi-filetype-py',
                    },
                    {
                        title: 'Vue.js',
                        icon: 'mdi mdi-vuejs',
                    },
                    {
                        title: 'vuetify',
                        icon: 'mdi mdi-vuetify',
                    },
                    {
                        title: 'Angular',
                        icon: 'mdi mdi-angular',
                    },
                    {
                        title: 'ionic',
                        icon: 'bi bi-terminal',
                    },
                    {
                        title: 'Git-Github',
                        icon: 'mdi mdi-github',
                    },
                ],
            },
        ],
    }),
    methods: {
        
    }
}
</script>