<template>
    <LineTimeComponent  title="Works" :content="content" :items="works" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import LineTimeComponent from '@/components/LineTimeComponent.vue';

const content = "A list of works I've done in the last years. I'm currently working on a new project, so I'll add it here soon.";

const works = [
    {
        cargo: 'Frontend Developer',
        empresa: 'El salvador',
        descripcion: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        inicio: '2022-01-01',
        fin: '2022-01-31',
        tareas: [
            {
                tarea: 'a list of works I\'ve done in the last years. I\'m currently working on a new project, so I\'ll add it here soon. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            },
            {
                tarea: 'Desarrollo Backend',
            },
            {
                tarea: 'Desarrollo Mobile',
            },
        ],
    },
    {
        cargo: 'Frontend Developer',
        empresa: 'El salvador',
        descripcion: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        inicio: '2022-01-01',
        fin: '2022-01-31',
        tareas: [
            {
                tarea: 'a list of works I\'ve done in the last years. I\'m currently working on a new project, so I\'ll add it here soon. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            },
            {
                tarea: 'Desarrollo Backend',
            },
            {
                tarea: 'Desarrollo Mobile',
            },
        ],
    },
    {
        cargo: 'Frontend Developer',
        empresa: 'El salvador',
        descripcion: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
        inicio: '2022-01-01',
        fin: '2022-01-31',
        tareas: [
            {
                tarea: 'a list of works I\'ve done in the last years. I\'m currently working on a new project, so I\'ll add it here soon. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            },
            {
                tarea: 'Desarrollo Backend',
            },
            {
                tarea: 'Desarrollo Mobile',
            },
        ],
    },
];

const items = computed(() => {
    return works.map((work) => {
        return {
            cargo: work.cargo,
            empresa: work.empresa,
            descripcion: work.descripcion,
            inicio: work.inicio,
            fin: work.fin,
            tareas: work.tareas,
        };
    });
});
</script>