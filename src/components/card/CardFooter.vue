<template>
  <Box class="bg-gray-100 text-gray-600 text-center" margin="none" tag="footer">
    <!-- <Button :onClick="handleClick">
        {{ buttonText }}
      </Button> -->
    <slot></slot>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../common/Box.vue";

export default defineComponent({
  name: "CardFooter",
  components: { Box },
});
</script>

<style scoped></style>
