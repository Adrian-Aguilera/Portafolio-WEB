<template>
    <v-card width="90%" :variant="isDark ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ ls </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text>
            <p class="pb-5">
                {{ content }}
            </p>
            <v-divider :thickness="5" class="pb-4"></v-divider>
            <v-data-iterator :items="data" :items-per-page="itemsPerPage">
                <template v-slot:default="{ items }">
                    <v-list-item v-for="(item, index) in items" :key="index">
                        <v-divider :thickness="5" v-if="index !== 0" class="mt-2"></v-divider>
                        <v-list-item-subtitle class="d-flex justify-space-between">
                            <v-breadcrumbs :items="item.raw.technologies">
                                <template v-slot:title="{ item }">
                                    {{ item.title }}
                                </template>
                            </v-breadcrumbs>
                            <v-slide-group
                                show-arrows
                                style="align-items: center;"
                            >
                                <v-slide-group-item >
                                    <v-btn :variant="isDark ? 'outlined' : 'tonal'" size="small" class="mr-2"
                                        @click="seendImage(item.raw.urlImage, item.raw.github)"
                                    >
                                        <v-icon icon="mdi-github" class="mr-1"></v-icon>
                                        github • see image
                                    </v-btn>

                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn :variant="isDark ? 'outlined' : 'tonal'" size="small"
                                                v-bind="props" class="mr-2">
                                                <v-icon icon="bi bi-caret-down"></v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>
                                                    <v-btn :variant="isDark === 'dark' ? 'outlined' : 'tonal'" size="small" :href="item.raw.vsCode">
                                                        <img height="20"
                                                            src="https://img.icons8.com/nolan/64/visual-studio-code-2019.png"
                                                            alt="visual-studio-code-2019" class="mr-1" />
                                                        VS code • github
                                                    </v-btn>
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-list-item-subtitle>
                        <v-list-item-title class="mb-5">{{ item.raw.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="mb-5">
                            {{ item.raw.description }}
                        </v-list-item-subtitle>
                        <v-slide-group
                            show-arrows
                        >
                            <v-slide-group-item >
                                <div class="d-flex">
                                    <div v-for="(status, index) in item.raw.status" :key="index">
                                        <v-btn :color="status.color" variant="tonal" class="mr-2">
                                            <v-icon :icon="status.icon" class="mr-1"></v-icon>
                                            {{ status.title }}
                                        </v-btn>
                                    </div>
                                    <v-chip color="error" variant="tonal">
                                        <v-icon class="mr-1">bi bi-app</v-icon>
                                        {{ item.raw.date }}
                                    </v-chip>
                                </div>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-list-item>
                </template>
                <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                    <div class="d-flex align-center justify-center pa-4">
                      <v-btn
                        :disabled="page === 1"
                        density="comfortable"
                        icon="bi bi-caret-left-fill"
                        variant="tonal"
                        rounded
                        @click="prevPage"
                      ></v-btn>
                      <div class="mx-2 text-caption">
                        Page {{ page }} of {{ pageCount }}
                      </div>
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
        </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1"><v-icon>bi bi-alt</v-icon></span>
    </v-card>
    <v-dialog
      v-model="dialog"
      width="auto"
      opacity="0.1"
    >
      <v-card
        width="600"
        :variant="isDark ? 'elevated' : 'outlined'"
        title="projects information"
        class="text-roboto"
      >
        <v-card-text>
            <span class="text-green-accent-3 d-block">~ ls projects/image </span>
            <span class="text-grey-lighten-1 mb-2">~ image of project</span>
            <v-img :src="urlImage" width="100%"></v-img>
            <v-divider :thickness="5" class="mb-4 mt-4"></v-divider>
            <v-btn
                variant="outlined"
                prepend-icon="mdi mdi-github"
                size="small"
                target="_blank"
                :href="github"
            > go to repository of github</v-btn>
        </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'boxComponent',
    props: {
        title: {
            type: String,
            default: 'Projects',
        },
        content: {
            type: String,
            default: 'This is a box component',
        },
        data: {
            type: Array,
            default: () => [],
        },
    },
    data: () => ({
        itemsPerPage: 2,
        dialog: false,
        github: null,
        urlImage: null,
    }),
    methods: {
        onClickSeeAll() {
            this.itemsPerPage = this.itemsPerPage === 4 ? this.mice.length : 4
        },
        seendImage(image, github) {
            this.dialog = true
            this.github = github
            this.urlImage = image
        },
    },
    computed: {
        isDark() {
            return this.$store.getters.isDark;
        }
    },
}
</script>