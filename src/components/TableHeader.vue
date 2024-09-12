<template>
  <thead class="bg-gray-300">
    <tr>
      <slot></slot>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableHeader",
});
</script>

<style scoped></style>
