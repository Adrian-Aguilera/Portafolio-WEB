<template>
    <PerfilComponent :myself="myself" title="Perfil"></PerfilComponent>
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
    }),
    methods: {
        
    }
}
</script>