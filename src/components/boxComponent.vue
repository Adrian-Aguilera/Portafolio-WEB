<template>
    <v-card  width="90%" :variant="theme==='dark'? none:'outlined'">
        <v-card-title >{{ `< ${title} />` }}</v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text>
            <p class="pb-5">asasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdgh</p>
            <v-divider :thickness="5" class="pb-2"></v-divider>
            <v-list dense>
                <v-list-item v-for="(item,index) in datatoSend" :key="index">
                    <v-list-item-subtitle class="d-flex justify-space-between">
                        <v-breadcrumbs :items="item.technologies">
                            <template v-slot:title="{ item }">
                              {{ item.title }}
                            </template>
                        </v-breadcrumbs>
                        <div>
                            <v-btn :variant="theme==='dark'? 'outlined':'tonal'" size="small" class="mr-2" :href="item.github">
                                <v-icon icon="mdi-github" class="mr-1" ></v-icon>
                                github • resopitory
                            </v-btn>
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn :variant="theme==='dark'? 'outlined':'tonal'" size="small" v-bind="props">
                                        <v-icon icon="bi bi-caret-down"></v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title>
                                            <v-btn :variant="theme==='dark'? 'outlined':'tonal'" size="small"  >
                                                <img height="20" src="https://img.icons8.com/nolan/64/visual-studio-code-2019.png" alt="visual-studio-code-2019" class="mr-1"/>
                                                VS code • github
                                            </v-btn>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-list-item-subtitle>
                    <v-list-item-title class="mb-5">{{ item.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="mb-5">
                        {{ item.description }}
                    </v-list-item-subtitle>
                    <v-list-item-action-text class="d-flex">
                        <div v-for="(status,index) in item.status" :key="index">
                            <v-btn :color="status.color" variant="tonal" class="mr-2">
                                {{ status.title }}
                            </v-btn>
                        </div>
                        <v-chip color="error" variant="tonal">
                            <v-icon class="mr-1">bi bi-app</v-icon>
                            {{ item.date }}
                        </v-chip>
                    </v-list-item-action-text>
                </v-list-item>
            </v-list>
        </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1"><v-icon>bi bi-alt</v-icon></span>
    </v-card>
</template>

<script>
export default {
    name: 'boxComponent',
    props: {
        title: {
            type: String,
            default: 'Projects',
        },
        subtitle: {
            type: String,
            default: 'This is a box component',
        },
    },
    data: () => ({
        items: [
            {
                text: 'Home',
                disabled: false,
                href: '/',
            },
            {
                text: 'Projects',
                disabled: false,
                href: '/projects',
            },
        ],
        datatoSend:[
            {
                name: 'Portafolio Web',
                description: 'This is a project description',
                github: 'https://github.com/Adrian-Aguilera',
                vsCode: 'https://github.dev/Portafolio-WEB',
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
                    },
                    {
                        title: 'DEVELOPMENT',
                        color: 'warning',
                    },
                ],
                date: '2 DAY AGO',
                tags: ['tag1', 'tag2', 'tag3'],
            },
        ]
    }),
    methods: {
        
    },
    computed: {
        theme(){
            return this.$store.getters.theme;
        }
    },
}
</script>