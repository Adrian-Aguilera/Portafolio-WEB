<template>
    <LineTimeComponent  title="Works" :content="content" :items="items" />
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
        items: [
            {
                cargo: 'Frontend Developer',
                empresa: 'El salvador',
                descripcion: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
                fecha: [
                    {
                        inicio: '2022-01-01',
                        fin: '2022-01-31',
                    },
                ],
                tareas: [
                    {
                        tarea: 'Desarrollo Frontend',
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
                fecha: [
                    {
                        inicio: '2022-01-01',
                        fin: '2022-01-31',
                    },
                ],
                tareas: [
                    {
                        tarea: 'Desarrollo Frontend',
                    },
                    {
                        tarea: 'Desarrollo Backend',
                    },
                    {
                        tarea: 'Desarrollo Mobile',
                    },
                ],
            },
        ],
    }),
    methods: {
        
    }
}
</script>