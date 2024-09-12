<template>
  <tr :class="['hover:bg-gray-200', index % 2 === 0 ? 'bg-gray-100' : '']">
    <slot></slot>
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
