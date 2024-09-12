<template>
  <th
    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    {{ title }}
  </th>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableHeaderCell",
  props: { title: { type: String, default: "" } },
});
</script>

<style scoped></style>
