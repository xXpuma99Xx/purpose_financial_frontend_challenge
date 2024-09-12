<template>
  <NavBar />

  <div class="sm:container sm:mx-auto">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "./layouts/NavBar.vue"

export default defineComponent({
  name: 'App',
  components: { NavBar },
  data() {
    return {};
  },
});
</script>