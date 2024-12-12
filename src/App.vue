<template>
  <v-app :theme="theme" class="text-roboto">
    <v-app-bar :elevation="0" flat>
      <template v-slot:prepend>
        <v-app-bar-nav-icon >
          <v-chip color="warning" @click="changeTheme" variant="outlined">
            <v-icon icon="bi bi-code-slash"></v-icon>
          </v-chip>
        </v-app-bar-nav-icon>
      </template>
      <v-app-bar-title @click="drawer = !drawer" class="text-roboto">
        {{ "< Portafolio />" }}
      </v-app-bar-title>
  
      <template v-slot:append>
        <div v-for="item in appbar" :key="item.contacto" class="mr-4">
          <v-tooltip :text="item.contacto" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" :href="item.to" variant="outlined">
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
      app
    >
      <v-list class="pl-0">
        <v-list-item v-for="(item,index) in menuData" :key="index">
          <v-list-item-title>{{ item.seccion }}
          </v-list-item-title>
          <v-divider></v-divider>
          <v-list-item-content>
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-item-title>
                <v-chip :color="theme === 'dark'? 'error':'primary'">
                  <v-icon>{{ subItem.icon }}</v-icon>
                </v-chip>
                {{ subItem.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="d-flex justify-center">
        <router-view/>
      </v-container>
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

export default {
  name: 'App',

  data: () => ({
    menuData: [
      {
        seccion: 'Perfil',
        items: [
          {
            title: 'Perfil',
            icon: 'bi bi-robot',
            to: '/',
          },
        ],
      },
      {
        seccion: 'Items',
        items: [
          {
            title: 'Proyectos',
            icon: 'bi bi-bezier2',
            to: '/proyectos',
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
  }),
  methods: {
    changeTheme() {
      this.$store.dispatch('setTheme', this.$store.getters.theme === 'dark' ? 'light' : 'dark');
    },
    getColorTheme() {
      this.colorTheme = this.$store.getters.theme;
    },
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
  },
}
</script>

<style>
  .text-roboto {
    font-family: "Roboto Mono", monospace;
  }
</style>
