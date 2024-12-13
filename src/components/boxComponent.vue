<template>
    <v-card  width="80%" :variant="theme==='dark'? none:'outlined'">
        <v-card-title >{{ `< ${title} />` }}</v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5">{</span>
        <v-card-text>
            <p class=" mb-2">asasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdjasasdashdgajhsdghjasdgjhasgdjhagsdj</p>
            <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1">}</span>
            <v-divider :thickness="5" class="mb-2 mt-2"></v-divider>
            <span class="ml-3 text-orange-darken-2 text-h5">{</span>
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
                            <v-btn :variant="theme==='dark'? 'outlined':'tonal'" size="small" :href="item.vsCode">
                                <img height="20" src="https://img.icons8.com/nolan/64/visual-studio-code-2019.png" alt="visual-studio-code-2019" class="mr-1"/>
                                VS code • github
                            </v-btn>
                        </div>
                    </v-list-item-subtitle>
                    <v-list-item-title class="d-flex justify-space-between mb-5">{{ item.name }} /
                        {{ item.description }}
                    </v-list-item-title>
                    <v-list-item-action-text class="d-flex justify-space-between">
                        <div>
                            <v-btn color="success" variant="tonal" class="mr-2">
                                RUNNING
                            </v-btn>
                            <v-btn  variant="tonal">
                                DEVELOPMENT
                            </v-btn>
                        </div>
                        <v-chip-group column>
                            <v-chip v-for="(tag,index) in item.tags" :key="index" class="mr-2" color="success" text-color="white">{{ tag }}</v-chip>
                        </v-chip-group>
                    </v-list-item-action-text>
                </v-list-item>
            </v-list>
        </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1">}</span>
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
                date: '2021-01-01',
                tags: ['tag1', 'tag2', 'tag3'],
            },
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
                date: '2021-01-01',
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