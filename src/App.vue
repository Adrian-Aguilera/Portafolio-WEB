<template>
  <v-app :theme="theme">
    <v-main>
      <router-view/>
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
