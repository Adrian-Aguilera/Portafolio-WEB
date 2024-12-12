<template>
  <v-app-bar :elevation="0" flat class="text-roboto">
    <template v-slot:prepend>
      <v-app-bar-nav-icon >
        <v-icon @click="changeTheme" icon="bi bi-code-slash" color="orange-darken-2"></v-icon>
      </v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Portafolio</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer class="text-roboto">
    <v-list class="pl-0">
      <v-list-item v-for="item in menuData" :key="item.seccion">
        <v-list-item-title>{{ item.seccion }}</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item-content>
          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
          >
            <v-list-item-title>
              <v-icon>{{ subItem.icon }}</v-icon>
              {{ subItem.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <boxComponent />
</template>

<script>
import { defineComponent } from 'vue';
import boxComponent from '@/components/boxComponent.vue';

export default defineComponent({
  name: 'boxMainView',

  components: {
    boxComponent,
  },
  data: () => ({
    menuData: [
      {
        seccion: 'Perfil',
        items: [
          {
            title: 'Perfil',
            icon: 'bi bi-person-badge',
            to: '/',
          },
        ],
      },
      {
        seccion: 'Lista de proyectos',
        items: [
          {
            title: 'Proyectos',
            icon: 'bi bi-bezier2',
            to: '/proyectos',
          },
        ],
      },
    ],
  }),
  methods: {
    changeTheme() {
      this.$store.dispatch('setTheme', this.$store.getters.theme === 'dark' ? 'light' : 'dark');
    },
  },
});
</script>
