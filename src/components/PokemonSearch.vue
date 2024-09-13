<template>
  <Box padding="none" margin="none" class="mb-8">
    <Box class="grid grid-cols-12 gap-2" padding="none" margin="none">
      <InputPokemonSearch
        class="col-span-6"
        :inputValue="inputValue"
        :handleChange="handleInputChange"
      />

      <SelectCathegory
        class="col-span-4"
        :selectedOption="selectedCathegory"
        :handleChenge="handleCathegoryChange"
      />

      <Box
        padding="none"
        margin="none"
        customClasses="grid col-span-2 content-end"
      >
        <Button
          size="small"
          class="w-full"
          :onClick="buscar"
          :disabled="!inputValue || !selectedCathegory"
        >
          Buscar
        </Button>
      </Box>
    </Box>
  </Box>

  <Loader v-if="isLoading" />

  <Box v-else-if="noEncontrado">
    <Typography variant="h3" align="center">
      No se encontro ningún resultado
    </Typography>
  </Box>

  <Box v-else-if="data" margin="none" padding="none">
    <PokemonCard :data="data" />
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getData } from "../services/pokemonHTTP";
import Box from "./common/Box.vue";
import Button from "./common/Button.vue";
import InputPokemonSearch from "./pokemon/InputPokemonSearch.vue";
import Loader from "./common/Loader.vue";
import PokemonCard from "./pokemon/PokemonCard.vue";
import SelectCathegory from "./pokemon/SelectCathegory.vue";
import Typography from "./common/Typography.vue";

export default defineComponent({
  name: "PokemonSearch",
  components: {
    Box,
    Button,
    PokemonCard,
    InputPokemonSearch,
    Loader,
    SelectCathegory,
    Typography,
  },
  data() {
    return {
      isLoading: false,
      noEncontrado: false,
      inputValue: "",
      selectedCathegory: "",
      data: null as any,
    };
  },
  methods: {
    async buscar() {
      if (this.selectedCathegory && this.inputValue) {
        this.cargando();
        this.noEncontrado = false;

        const endpoint = `/${this.selectedCathegory.replace(
          "{id or name}",
          this.inputValue
        )}`;

        await getData<any>(endpoint)
          .then((res) => (this.data = res))
          .catch((err) => {
            if (err === "Not Found") this.noEncontrado = true;
          });

        this.detenerCarga();
      }
    },
    handleInputChange(e: any) {
      this.inputValue = e.target.value;
    },
    handleCathegoryChange(e: any) {
      this.selectedCathegory = e.target.value;
    },
    updateData(newData: any) {
      this.data = newData;
    },
    cargando() {
      this.isLoading = true;
    },
    detenerCarga() {
      this.isLoading = false;
    },
  },
});
</script>

<style scoped></style>
