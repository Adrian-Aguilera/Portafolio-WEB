<template>
    <v-card width="90%" :variant="theme === 'dark' ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ cd </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text>
            <p class="pb-5">
                {{ content }}
            </p>
            <v-slide-group
                show-arrows
            >
                <v-slide-group-item >
                    <v-badge  color="warning" content="from El salvador" offset-x="10" offset-y="10"></v-badge>
                </v-slide-group-item>
            </v-slide-group>
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
        
    }),
    methods: {
        
    },
    computed: {
        theme() {
            return this.$store.getters.theme;
        }
    },
}
</script>