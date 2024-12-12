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
    theme: 'dark',
  }),
}
</script>
