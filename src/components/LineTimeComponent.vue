<template>
    <v-card width="90%" :variant="theme === 'dark' ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ cd </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text>
            <p class="pb-5">
                {{ content }}
            </p>
            <v-divider :thickness="5" class="pb-4"></v-divider>
            <v-virtual-scroll
                :items="items"
                item-height="100"
                height="55vh"
            >
                <template v-slot="{ item, index }">
                    <v-timeline side="end">
                        <v-timeline-item
                        :key="index"
                        dot-color="green-accent-3"
                        size="small"
                      >
                        <v-card class="pa-2" :variant="isDark ? 'outlined' : 'outlined'" width="90%">
                          <v-card-title>
                            <span>$ </span>{{ `${item.cargo}` }}
                          </v-card-title>
                          <v-card-subtitle class="d-flex justify-space-between">
                            <div>
                                <v-icon class="mr-2" color="green-accent-3">bi bi-buildings-fill</v-icon>
                                <span class="justify-center">{{ `${item.empresa}` }} </span>
                            </div>
                            <div>
                                <v-chip :color="isDark ? 'green-accent-3' : 'error'" variant="tonal">
                                    <v-icon class="mr-1" >mdi-calendar-clock</v-icon>
                                    {{ `${item.fecha[0].inicio}` }} ~ {{ `${item.fecha[0].fin}` }}
                                </v-chip>
                            </div>
                          </v-card-subtitle>
                          <v-card-text>
                            <p class="pb-5">
                                {{ `${item.descripcion}` }}
                            </p>
                            <v-divider :thickness="5" class="pb-4"></v-divider>
                            <span class="text-green-accent-3">~ ls </span><span class="text-grey-lighten-1"> Featured tasks</span>
                            <v-list class="d-flex" >
                                <v-list-item v-for="(tarea, index) in item.tareas" :key="index">
                                    <v-list-item-title>
                                        • {{ tarea.tarea }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-timeline-item>
                    </v-timeline>
                </template>
            </v-virtual-scroll>
            <v-divider :thickness="5" class="pb-4"></v-divider>
        </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1"><v-icon>bi bi-alt</v-icon></span>
    </v-card>
</template>
<script>
export default {
    name: 'LineTimeComponent',
    props: {
        title: {
            type: String,
            default: 'works',
        },
        content: {
            type: String,
            default: 'This is a box component',
        },
    },
    data: () => ({
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
        
    },
    computed: {
        theme() {
            return this.$store.getters.theme;
        },
        isDark() {
            return this.$store.getters.isDark;
        }
    },
}
</script>