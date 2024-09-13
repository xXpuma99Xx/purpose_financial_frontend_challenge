<template>
  <tr :class="['hover:bg-gray-200', index % 2 === 0 ? 'bg-gray-100' : '']">
    <slot name="main"></slot>
  </tr>

  <tr v-if="$slots.details">
    <slot name="details"></slot>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableBodyRow",
  props: { index: { type: Number, required: true } },
});
</script>

<style scoped></style>
