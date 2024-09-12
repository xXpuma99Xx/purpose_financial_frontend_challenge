<template>
  <header class="bg-gray-800 text-white mb-8 h-16 grid content-center">
    <nav class="sm:container sm:mx-auto flex justify-center">
      <NavBarOption
        v-for="(navOption, index) in navBarOptions"
        :key="index"
        :option="navOption.option"
        :route="navOption.route"
      />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarOption from "../components/NavBarOption.vue";

export default defineComponent({
  name: "NavBar",
  components: { NavBarOption },
  data() {
    return {
      navBarOptions: [
        { option: "Tabla usuarios", route: "/" },
        { option: "Buscardor", route: "/buscador" },
        { option: "CV", route: "/cv" },
      ],
    };
  },
});
</script>

<style scoped></style>
