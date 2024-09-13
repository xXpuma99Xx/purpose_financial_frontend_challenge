<template>
  <td class="px-5 py-3 whitespace-nowrap text-sm text-gray-500">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableBodyCell",
});
</script>

<style scoped></style>
