<template>
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
});
</script>
