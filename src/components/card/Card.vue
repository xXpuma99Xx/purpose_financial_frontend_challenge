<template>
  <Box
    class="bg-white shadow-md rounded-lg overflow-hidden max-w-sm"
    padding="none"
    margin="none"
  >
    <slot></slot>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../common/Box.vue";

export default defineComponent({
  name: "Card",
  components: { Box },
});
</script>

<style scoped></style>
