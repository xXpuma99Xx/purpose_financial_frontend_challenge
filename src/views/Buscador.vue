<template>
  <PokemonSearch />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokemonSearch from "../components/PokemonSearch.vue";

export default defineComponent({
  name: "Buscador",
  components: { PokemonSearch },
});
</script>

<style scoped></style>
