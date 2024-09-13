<template>
  <Box margin="none" class="mb-4">
    <slot></slot>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../common/Box.vue";

export default defineComponent({
  name: "CardBody",
  components: { Box },
});
</script>

<style scoped></style>
