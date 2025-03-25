<template>
    <boxComponent title="Projects" :content="content" :data="projects"></boxComponent>
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
        projects: [
            {
                name: 'Project 1',
                description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                technologies: [{
                    title: 'HTML', disabled: false,
                    href: 'breadcrumbs_dashboard',
                }, {
                    title: 'CSS', disabled: false,
                    href: 'breadcrumbs_dashboard',
                }, {
                    title: 'CSS', disabled: false,
                    href: 'breadcrumbs_dashboard',
                }],
                date: '2022-01-01',
                imagen: 'https://p1icsum.photos/200/300',
                github: 'https://github.com/Adrian-Aguilera',
                vsCode: 'https://code.visualstudio.com/download',
                Estado: [
                    {
                        title: 'In progress',
                        color: 'success',
                    },
                    {
                        title: 'Done',
                        color: 'error',
                    },
                ],
            },
        ],
    }),
    methods: {
        getProjects() {
            api.get('api/v1/projects')
                .then((response) => {
                    const data = response.data.data.map((item) => {
                        return {
                            name: item.name,
                            description: item.description,
                            technologies: item.technologies,
                            date: item.date,
                            imagen: `${this.$store.getters.base}/api/v1${item.imagen}`,
                            github: item.github,
                            vsCode: item.vsCode,
                            Estado: item.Estado,
                        }
                    })
                    this.datatoSend = data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
}
</script>