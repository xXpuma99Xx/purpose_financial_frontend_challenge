<template>
  <div class="w-full">
    <label
      for="input-pokemon-search"
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      ¿Qué buscas?
    </label>

    <input
      v-model="localInput"
      type="text"
      id="input-pokemon-search"
      class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="Escribe lo que buscas"
      @input="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputPokemonSearch",
  props: {
    inputValue: { type: String, required: true },
    handleChange: { type: Function, required: true },
  },
  data() {
    return { localInput: this.inputValue };
  },
});
</script>

<style scoped></style>
