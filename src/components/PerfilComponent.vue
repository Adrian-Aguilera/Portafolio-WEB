<template>
    <v-card width="90%" :variant="theme === 'dark' ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ cd </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text>
            <v-badge  color="warning" content="from El salvador" offset-x="10" offset-y="10">
            <pre class="text-green-accent-4 font-weight-black" style="font-size: 1rem; font-family: 'Courier New', Courier, monospace; white-space: pre; line-height: 1;">
      _      _     _               _             _ _
     /_\  __| |_ _(_)__ _ _ _     /_\  __ _ _  _(_| |___ _ _ __ _
    / _ \/ _` | '_| / _` | ' \   / _ \/ _` | || | | / -_| '_/ _` |
   /_/ \_\__,_|_| |_\__,_|_||_| /_/ \_\__, |\_,_|_|_\___|_| \__,_|
                                      |___/
            </pre></v-badge>
            <v-divider :thickness="5" class="pb-4"></v-divider>
            <v-card-text>
                <p class="pb-5">
                    <span class="text-green-accent-3 d-block">~ dir/myself </span>
                    <span >~ {{ myself }} </span>
                </p>
            </v-card-text>
            <v-divider :thickness="5" class="pb-4"></v-divider>
            <v-card-text >
                <!--my Stacks technical skills-->
                <span class="text-green-accent-3 d-block">~ ls -skills </span>
                <v-card variant="text" subtitle="~ backend development" class="d-flex">
                    <v-card-text >
                        <v-list class="d-flex">
                            <v-list-item v-for="(skill, index) in backendSkills" :key="index">
                                <v-list-item-title>
                                    <v-chip color="success" variant="tonal">
                                        <v-icon class="mr-1">{{ skill.icon }}</v-icon>
                                        {{ skill.title }}
                                    </v-chip>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
                <v-card variant="text" subtitle="~ frontend development" class="d-flex">
                    <v-card-text >
                        <v-list class="d-flex">
                            <v-list-item v-for="(skill, index) in frontendSkills" :key="index">
                                <v-list-item-title>
                                    <v-chip color="success" variant="tonal">
                                        <v-icon class="mr-1">{{ skill.icon }}</v-icon>
                                        {{ skill.title }}
                                    </v-chip>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
                <v-card variant="text" subtitle="~ scripting development" class="d-flex">
                    <v-card-text >  
                        <v-list class="d-flex">
                            <v-list-item v-for="(skill, index) in scriptingSkills" :key="index">
                                <v-list-item-title>
                                    <v-chip color="success" variant="tonal">
                                        <v-icon class="mr-1">{{ skill.icon }}</v-icon>
                                        {{ skill.title }}
                                    </v-chip>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-card-text>

          </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1"><v-icon>bi bi-alt</v-icon></span>
    </v-card>
</template>

<script>
export default {
    name: 'PerfilComponent',
    props: {
        title: {
            type: String,
            default: 'perfil',
        },
        myself: {
            type: String,
            default: 'This is a box component',
        },
    },
    data: () => ({
        backendSkills: [
            {
                title: 'Django',
                icon: 'bi bi-app',
            },
            {
                title: 'Django REST Framework',
                icon: 'bi bi-app',
            },
        ],
        frontendSkills: [
            {
                title: 'Vue.js',
                icon: 'bi bi-app',
            },
            {
                title: 'Vuetify',
                icon: 'bi bi-app',
            },
        ],
        scriptingSkills: [
            {
                title: 'Python',
                icon: 'bi bi-app',
            },
            {
                title: 'Bash',
                icon: 'bi bi-app',
            },
        ],
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