<template>
  <v-app :theme="theme">
    <v-main class="text-roboto">
      <router-view/>
      <v-footer class="text-roboto">
        Adrian-Aguilera
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
  computed: {
    theme() {
      return this.$store.getters.theme
    },
  },
}
</script>

<style>
  .text-roboto {
    font-family: "Roboto Mono", monospace;
  }
</style>
