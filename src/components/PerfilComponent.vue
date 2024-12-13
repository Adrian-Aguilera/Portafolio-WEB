<template>
    <v-card width="90%" :variant="theme === 'dark' ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ cd </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text>
            <v-slide-group
                show-arrows
            >
                <v-slide-group-item >
                    <v-badge  color="warning" content="from El salvador" offset-x="10" offset-y="10">
                        <pre class="text-green-accent-4 font-weight-black" style="font-size: 1rem; font-family: 'Courier New', Courier, monospace; white-space: pre; line-height: 1;">
         _      _     _               _             _ _
        /_\  __| |_ _(_)__ _ _ _     /_\  __ _ _  _(_| |___ _ _ __ _
       / _ \/ _` | '_| / _` | ' \   / _ \/ _` | || | | / -_| '_/ _` |
      /_/ \_\__,_|_| |_\__,_|_||_| /_/ \_\__, |\_,_|_|_\___|_| \__,_|
                                         |___/
                        </pre>
                    </v-badge>
                </v-slide-group-item>
            </v-slide-group>

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
                <div>
                    <v-card v-for="(skill, index) in skills" :key="index" variant="text" :subtitle="`~ ${skill.title} development`">
                        <v-card-text >
                            <v-list class="d-flex">
                                <v-list-item v-for="(technology, index) in skill.technologies" :key="index">
                                    <v-list-item-title>
                                        <v-chip color="success" variant="tonal">
                                            <v-icon class="mr-1">{{ technology.icon }}</v-icon>
                                            {{ technology.title }}
                                        </v-chip>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                            <v-list class="d-flex">
                                <v-list-item v-for="(framework, index) in skill.frameworks" :key="index">
                                    <v-list-item-title>
                                        <v-chip color="success" variant="tonal">
                                            <v-icon class="mr-1">{{ framework.icon }}</v-icon>
                                            {{ framework.title }}
                                        </v-chip>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </div>
                <span class="text-grey-lighten-1 font-weight-bold">~ github activity</span>
                <div class="d-flex">
                    <v-slide-group
                        show-arrows
                    >
                        <v-slide-group-item >
                            <v-card-text v-for="(activity, index) in gitHubActivity" :key="index" >
                                <v-img :src="activity.avatar" width="350"></v-img>
                            </v-card-text>
                        </v-slide-group-item>
                    </v-slide-group>

                </div>
            </v-card-text>
          </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1"><v-icon>bi bi-alt</v-icon></span>
    </v-card>
</template>

<script>
import 'github-calendar/dist/github-calendar-responsive.css';
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
        skills: {
            type: Array,
            default: () => [],
        },
        gitHubActivity: {
            type: Array,
            default: () => [],
        },
    },
    data: () => ({
    }),
    methods: {},
    computed: {
        theme() {
            return this.$store.getters.theme;
        }
    },
}
</script>