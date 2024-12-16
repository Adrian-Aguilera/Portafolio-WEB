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
            <v-data-iterator :items="items" :items-per-page="itemsPerPage">
                <template v-slot:default="{ items }">
                    <v-timeline side="end">
                        <v-timeline-item
                        v-for="(item, index) in items"
                        :key="index"
                        dot-color="green-accent-3"
                        size="small"
                      >
                        <v-card class="pa-2" :variant="isDark ? 'outlined' : 'outlined'" width="90%">
                          <v-card-title>
                            <span>$ </span>{{ `${item.raw.cargo}` }}
                          </v-card-title>
                          <v-card-subtitle class="d-flex justify-space-between">
                            <div>
                                <v-icon class="mr-2" color="green-accent-3">bi bi-buildings-fill</v-icon>
                                <span class="justify-center">{{ `${item.raw.empresa}` }} </span>
                            </div>
                            <div>
                                <v-chip :color="isDark ? 'green-accent-3' : 'error'" variant="tonal">
                                    <v-icon class="mr-1" >mdi-calendar-clock</v-icon>
                                    {{ `${item.raw.fecha[0].inicio}` }} ~ {{ `${item.raw.fecha[0].fin}` }}
                                </v-chip>
                            </div>
                          </v-card-subtitle>
                          <v-card-text>
                            <p class="pb-5">
                                {{ `${item.raw.descripcion}` }}
                            </p>
                            <v-divider :thickness="5" class="pb-4"></v-divider>
                            <span class="text-green-accent-3">~ ls </span><span class="text-grey-lighten-1"> Featured tasks</span>
                            <v-list class="d-flex" >
                                <v-list-item v-for="(tarea, index) in item.raw.tareas" :key="index">
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
                <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                    <div class="d-flex align-center justify-center pa-4">
                      <v-btn
                        :disabled="page === 1"
                        density="comfortable"
                        icon="bi bi-caret-left-fill"
                        variant="tonal"
                        rounded
                        class="mr-2"
                        @click="prevPage"
                      ></v-btn>
                      <v-btn
                        :disabled="page >= pageCount"
                        density="comfortable"
                        icon="bi bi-caret-right-fill"
                        variant="tonal"
                        rounded
                        @click="nextPage"
                      ></v-btn>
                    </div>
                  </template>
            </v-data-iterator>
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
        items: {
            type: Array,
            default: () => [],
        },
    },
    data: () => ({
        itemsPerPage: 2,
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