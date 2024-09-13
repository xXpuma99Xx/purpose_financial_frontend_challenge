<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <slot></slot>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableBody",
});
</script>

<style scoped></style>
