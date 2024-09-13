<template>
  <table class="min-w-full divide-y divide-gray-200">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
});
</script>

<style scoped></style>
