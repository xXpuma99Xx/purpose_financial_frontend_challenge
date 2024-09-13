<template>
  <div :class="boxClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Box",
  props: {
    padding: {
      type: String as PropType<"none" | "sm" | "md" | "lg" | "xl">,
      default: "md",
    },
    margin: {
      type: String as PropType<"none" | "sm" | "md" | "lg" | "xl">,
      default: "md",
    },
    bgColor: {
      type: String as PropType<
        "transparent" | "white" | "gray" | "primary" | "secondary" | "danger"
      >,
      default: "transparent",
    },
    borderRadius: {
      type: String as PropType<"none" | "sm" | "md" | "lg" | "full">,
      default: "md",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    customClasses: {
      type: String,
      default: "",
    },
  },
  computed: {
    boxClasses() {
      return [
        this.paddingClasses,
        this.marginClasses,
        this.bgColorClasses,
        this.borderRadiusClasses,
        this.shadow ? "shadow-md" : "",
        this.customClasses,
      ].join(" ");
    },
    paddingClasses() {
      switch (this.padding) {
        case "none":
          return "p-0";
        case "sm":
          return "p-2";
        case "lg":
          return "p-8";
        case "xl":
          return "p-12";
        case "md":
        default:
          return "p-4";
      }
    },
    marginClasses() {
      switch (this.margin) {
        case "none":
          return "m-0";
        case "sm":
          return "m-2";
        case "lg":
          return "m-8";
        case "xl":
          return "m-12";
        case "md":
        default:
          return "m-4";
      }
    },
    bgColorClasses() {
      switch (this.bgColor) {
        case "white":
          return "bg-white";
        case "gray":
          return "bg-gray-200";
        case "primary":
          return "bg-blue-500";
        case "secondary":
          return "bg-gray-500";
        case "danger":
          return "bg-red-500";
        case "transparent":
        default:
          return "bg-transparent";
      }
    },
    borderRadiusClasses() {
      switch (this.borderRadius) {
        case "none":
          return "rounded-none";
        case "sm":
          return "rounded-sm";
        case "lg":
          return "rounded-lg";
        case "full":
          return "rounded-full";
        case "md":
        default:
          return "rounded-md";
      }
    },
  },
});
</script>

<style scoped>
/* Agrega estilos adicionales si es necesario */
</style>
