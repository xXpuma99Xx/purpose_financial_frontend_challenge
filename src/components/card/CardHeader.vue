<template>
  <Box bgColor="primary" tag="header" margin="none">
    <slot></slot>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../common/Box.vue";

export default defineComponent({
  name: "CardHeader",
  components: { Box },
});
</script>

<style scoped></style>
