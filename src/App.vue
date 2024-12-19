<template>
  <v-app :theme="theme" class="text-roboto">
    <v-app-bar :elevation="0" flat>
      <v-app-bar-title  class="text-roboto text-h5">
        <span class="text-green-accent-3">~ </span>
        <v-icon @click="drawer = !drawer" :icon="drawer ? 'bi bi-layout-sidebar-inset' : 'bi bi-layout-sidebar-inset-reverse'" size="small"></v-icon>
      </v-app-bar-title>
      <v-app-bar-title class="text-roboto">
        {{ "< Portafolio />" }}
        <v-badge floating color="success" content="beta">
        </v-badge>
      </v-app-bar-title>
      <template v-slot:append>
        <div v-for="item in appbar" :key="item.contacto" class="mr-4">
          <v-tooltip :text="item.contacto" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" :href="item.to" variant="outlined" target="_blank">
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </div>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      :width="320"
      app
    >
      <v-list class="pl-0">
        <v-list-item v-for="(item,index) in menuData" :key="index">
          <v-list-item-title ><span class="text-green-accent-3">~ [adrian@dev]$ ls </span>{{ item.seccion }}/
          </v-list-item-title>
          <v-divider></v-divider>

          <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
        >
          <v-list-item-title class="mb-3 mt-2">
            <span class="text-grey-lighten-1">~ </span>
            <v-chip :color="theme === 'dark'? 'error':'primary'">
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-chip>
            {{ subItem.title }}
          </v-list-item-title>
        </v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="d-flex" style="align-items: center;">
      <v-container fluid class="d-flex justify-center">
        <router-view/>
      </v-container>
      <v-dialog
        v-model="dialog"
        max-width="320"
        persistent
        transition="dialog-bottom-transition"
        opacity="0.1"
      >
      <v-list
        class="py-2"
        color="primary"
        elevation="12"
        rounded="lg"
      >
        <v-list-item
          title="Activating backend..."
        >
          <template v-slot:prepend>
            <div class="pe-4">
              <v-icon color="success" size="x-large" icon="bi bi-hdd-rack-fill"></v-icon>
            </div>
          </template>

          <template v-slot:append>
            <v-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="25"
              width="3"
            ></v-progress-circular>
          </template>
        </v-list-item>
      </v-list>
    </v-dialog>
      <v-footer
        app
        style="justify-content: flex-end;"
      >
        <span>
          &copy; 2024 by Adrian Aguilera
        </span>
        <v-badge inline color="success" content="dev">
        </v-badge>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import api from './api/api';
export default {
  name: 'App',

  data: () => ({
    menuData: [
      {
        seccion: 'profile',
        items: [
          {
            title: 'profile',
            icon: 'mdi mdi-shield-account',
            to: '/',
          },
        ],
      },
      {
        seccion: 'items',
        items: [
          {
            title: 'projects',
            icon: 'bi bi-bezier2',
            to: '/projects',
          },
          {
            title: 'works',
            icon: 'bi bi-pc-display-horizontal',
            to: '/works',
          },
        ],
      },
      {
        seccion: 'contact',
        items: [
          {
            title: 'contact',
            icon: 'mdi-email',
            to: '/contact',
          },
        ],
      },
    ],
    appbar:[
      {
        contacto: 'github',
        icon: 'mdi-github',
        to: 'https://github.com/Adrian-Aguilera',
      },
      {
        contacto: 'LinkedIn',
        icon: 'mdi-linkedin',
        to: 'https://www.linkedin.com/in/adri%C3%A1n-aguilera/',
      },
    ],
    colorTheme: null,
    drawer: null,
    rail: false,
    dialog: true
  }),
  methods: {
    changeTheme() {
      this.$store.dispatch('setTheme', this.$store.getters.theme === 'dark' ? 'light' : 'dark');
    },
    async activateBackend() {
      const data = await api.get(`${this.$store.getters.base}/api/v1/activate`);
      if (data.status === 200) {
        this.dialog = false;
      }
      else {
        this.dialog = true;
      }
    },
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    isDark() {
      return this.$store.getters.isDark;
    },
    base() {
      return this.$store.getters.base;
    },
    activate() {
      return this.activateBackend();
    }
  },
  created() {
    this.activateBackend();
  },
}
</script>

<style>
  .text-roboto {
    font-family: "Roboto Mono", monospace;
  }
</style>
