<template>
  <component
    :is="tag"
    :class="[
      baseClasses,
      variantClasses,
      colorClasses,
      alignClasses,
      underlineClasses,
    ]"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Typography",
  props: {
    variant: {
      type: String as PropType<
        "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
      >,
      default: "p",
    },
    color: {
      type: String as PropType<
        "primary" | "secondary" | "danger" | "success" | "warning" | "gray"
      >,
      default: "gray",
    },
    align: {
      type: String as PropType<"left" | "center" | "right" | "justify">,
      default: "left",
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tag() {
      return this.variant;
    },
    baseClasses() {
      return "font-sans";
    },
    variantClasses() {
      switch (this.variant) {
        case "h1":
          return "text-4xl font-bold";
        case "h2":
          return "text-3xl font-semibold";
        case "h3":
          return "text-2xl font-medium";
        case "h4":
          return "text-xl font-medium";
        case "h5":
          return "text-lg font-medium";
        case "h6":
          return "text-base font-medium";
        case "p":
        default:
          return "text-base";
      }
    },
    colorClasses() {
      switch (this.color) {
        case "primary":
          return "text-blue-500";
        case "secondary":
          return "text-gray-500";
        case "danger":
          return "text-red-500";
        case "success":
          return "text-green-500";
        case "warning":
          return "text-yellow-500";
        case "gray":
        default:
          return "text-gray-700";
      }
    },
    alignClasses() {
      switch (this.align) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        case "justify":
          return "text-justify";
        case "left":
        default:
          return "text-left";
      }
    },
    underlineClasses() {
      return this.underline ? "underline cursor-pointer hover:text-gray-400" : "";
    },
  },
});
</script>

<style scoped></style>
