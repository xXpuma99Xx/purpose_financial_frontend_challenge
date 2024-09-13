<template>
  <div>
    <label
      for="select-cathegory"
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      Categoría:
    </label>

    <select
      id="select-cathegory"
      v-model="localSelectedOption"
      class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      @change="handleChenge"
    >
      <option disabled value="">Selecciona una opción</option>

      <optgroup
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <option
          v-for="option in group.options"
          :key="option.value"
          :value="option.value"
          class="bg-gray-50 hover:bg-gray-100"
        >
          {{ option.label }}
        </option>
      </optgroup>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectCathegory",
  props: {
    selectedOption: { type: String, required: true },
    handleChenge: { type: Function, required: true },
  },
  data() {
    return {
      localSelectedOption: this.selectedOption,
      options: [
        {
          label: "Berries",
          options: [
            { label: "Berries", value: "berry/{id or name}" },
            { label: "Berry Firmnesses", value: "berry-firmness/{id or name}" },
            { label: "Berry Flavors", value: "berry-flavor/{id or name}" },
          ],
        },
        {
          label: "Contests",
          options: [
            { label: "Contest Types", value: "contest-type/{id or name}" },
            { label: "Contest Effects", value: "contest-effect/{id or name}" },
            {
              label: "Super Contest Effects",
              value: "super-contest-effect/{id or name}",
            },
          ],
        },
        {
          label: "Encounters",
          options: [
            {
              label: "Encounter Methods",
              value: "encounter-method/{id or name}",
            },
            {
              label: "Encounter Conditions",
              value: "encounter-condition/{id or name}",
            },
            {
              label: "Encounter Condition Values",
              value: "encounter-condition-val/{id or name}ue",
            },
          ],
        },
        {
          label: "Evolution",
          options: [
            {
              label: "Evolution Chains",
              value: "evolution-chain/{id or name}",
            },
            {
              label: "Evolution Triggers",
              value: "evolution-trigger/{id or name}",
            },
          ],
        },
        {
          label: "Games",
          options: [
            { label: "Generations", value: "generation/{id or name}" },
            { label: "Pokedexes", value: "pokedex/{id or name}" },
            { label: "Version", value: "version/{id or name}" },
            { label: "Version Groups", value: "version-group/{id or name}" },
          ],
        },
        {
          label: "Items",
          options: [
            { label: "Item", value: "item/{id or name}" },
            { label: "Item Attributes", value: "item-attribute/{id or name}" },
            { label: "Item Categories", value: "item-category/{id or name}" },
            {
              label: "Item Fling Effects",
              value: "item-fling-effect/{id or name}",
            },
            { label: "Item Pockets", value: "item-pocket/{id or name}" },
          ],
        },
        {
          label: "Locations",
          options: [
            { label: "Locations", value: "location/{id or name}" },
            { label: "Location Areas", value: "location-area/{id or name}" },
            { label: "Pal Park Areas", value: "pal-park-area/{id or name}" },
            { label: "Regions", value: "region/{id or name}" },
          ],
        },
        {
          label: "Machines",
          options: [{ label: "Machines", value: "machine/{id or name}" }],
        },
        {
          label: "Moves",
          options: [
            { label: "Moves", value: "move/{id or name}" },
            { label: "Move Ailments", value: "move-ailment/{id or name}" },
            {
              label: "Move Battle Styles",
              value: "move-battle-style/{id or name}",
            },
            { label: "Move Categories", value: "move-category/{id or name}" },
            {
              label: "Move Damage Classes",
              value: "move-damage-class/{id or name}",
            },
            {
              label: "Move Learn Methods",
              value: "move-learn-method/{id or name}",
            },
            { label: "Move Targets", value: "move-target/{id or name}" },
          ],
        },
        {
          label: "Pokémon",
          options: [
            { label: "Abilities", value: "ability/{id or name}" },
            { label: "Characteristics", value: "characteristic/{id or name}" },
            { label: "Egg Groups", value: "egg-group/{id or name}" },
            { label: "Genders", value: "gender/{id or name}" },
            { label: "Growth Rates", value: "growth-rate/{id or name}" },
            { label: "Natures", value: "nature/{id or name}" },
            {
              label: "Pokeathlon Stats",
              value: "pokeathlon-stat/{id or name}",
            },
            { label: "Pokemon", value: "pokemon/{id or name}" },
            {
              label: "Pokemon Location Areas",
              value: "pokemon/{id or name}/encounters",
            },
            { label: "Pokemon Colors", value: "pokemon-color/{id or name}" },
            { label: "Pokemon Forms", value: "pokemon-form/{id or name}" },
            {
              label: "Pokemon Habitats",
              value: "pokemon-habitat/{id or name}",
            },
            { label: "Pokemon Shapes", value: "pokemon-shape/{id or name}" },
            { label: "Pokemon Species", value: "pokemon-species/{id or name}" },
            { label: "Stats", value: "stat/{id or name}" },
            { label: "Types", value: "type/{id or name}" },
          ],
        },
      ],
    };
  },
});
</script>

<style scoped></style>
