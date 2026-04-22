<template>
    <PerfilComponent :myself="myself" title="Perfil" :skills="skills" :gitHubActivity="gitHubActivity"
        :socials="socials" />
</template>


<script setup lang="ts">
import PerfilComponent from '@/components/PerfilComponent.vue';

const myself = "Hi 👋! My name is Adrian Aguilera and I'm a Python developer from El Salvador. I am a developer specializing mainly in Python, building and developing microservices with Django REST Framework. Website development with Vue.js framework. Scripting development using Python. Enthusiast and AI developer using libraries like ollama";

const skills = [
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
                title: 'Django REST Framework',
                icon: 'bi bi-bounding-box',
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
                title: 'Scripting',
                icon: 'mdi mdi-script-text',
            },
            {
                title: 'ionic',
                icon: 'bi bi-terminal',
            },
            {
                title: 'Git-Github',
                icon: 'mdi mdi-github',
            },
            {
                title: 'Ollama AI',
                icon: 'mdi mdi-sheep',
            },
        ],
    },
];
const gitHubActivity = [
    {
        avatar: 'https://github-readme-stats.vercel.app/api?username=Adrian-Aguilera&show_icons=true&theme=dracula&locale=en&hide_border=false',
    },
    {
        avatar: 'https://github-readme-stats.vercel.app/api/top-langs?username=Adrian-Aguilera&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false',
    },
];

const socials = [
    {
        icon: "mdi mdi-linkedin",
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/adri%C3%A1n-aguilera/",
    },
    {
        icon: "mdi mdi-github",
        title: "Github",
        url: "https://github.com/Adrian-Aguilera",
    },
    {
        icon: "bi bi-link-45deg",
        title: "Upwork",
        url: "https://upwork.com/freelancers/adriana43",
    }
];
</script>
