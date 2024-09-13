<template>
  <button
    :class="[
      'px-4 py-2 font-semibold text-white rounded-md focus:outline-none',
      variantClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button",
    },
    variant: {
      type: String as PropType<"primary" | "secondary" | "danger">,
      default: "primary",
    },
    size: {
      type: String as PropType<"small" | "medium" | "large">,
      default: "medium",
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    variantClasses() {
      switch (this.variant) {
        case "secondary":
          return "bg-gray-500 hover:bg-gray-600";
        case "danger":
          return "bg-red-500 hover:bg-red-600";
        case "primary":
        default:
          return "bg-blue-500 hover:bg-blue-600";
      }
    },
    sizeClasses() {
      switch (this.size) {
        case "small":
          return "text-sm px-2 py-1";
        case "large":
          return "text-lg px-6 py-3";
        case "medium":
        default:
          return "text-base px-4 py-2";
      }
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (!this.disabled) {
        this.onClick(event);
      }
    },
  },
});
</script>

<style scoped></style>
