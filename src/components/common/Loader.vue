<template>
  <div class="flex justify-center items-center min-h-[200px]">
    <div class="relative w-24 h-16">
      <div
        class="absolute left-0 flex items-center justify-center w-full h-full"
      >
        <div
          class="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-0"
        ></div>
        <div
          class="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-200"
        ></div>
        <div
          class="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-400"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animation-delay-0 {
  animation-delay: 0s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.relative .absolute div:nth-child(1) {
  margin-right: 12px;
}

.relative .absolute div:nth-child(2) {
  margin-right: 12px;
}
</style>
