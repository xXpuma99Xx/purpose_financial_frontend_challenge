<template>
  <component :is="tag" :class="boxClasses">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Box",
  props: {
    tag: {
      type: String as PropType<
        "div" | "section" | "article" | "aside" | "header" | "footer"
      >,
      default: "div",
    },
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
    border: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String as PropType<"gray" | "blue" | "red" | "green">,
      default: "gray",
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
        this.border ? `border border-${this.borderColor}-500` : "",
        this.customClasses,
      ].join(" ");
    },
    paddingClasses() {
      const sizes = {
        none: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      };
      return sizes[this.padding] || sizes.md;
    },
    marginClasses() {
      const sizes = {
        none: "m-0",
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
        xl: "m-8",
      };
      return sizes[this.margin] || sizes.md;
    },
    bgColorClasses() {
      const colors = {
        white: "bg-white",
        gray: "bg-gray-200",
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        danger: "bg-red-500",
        transparent: "bg-transparent",
      };
      return colors[this.bgColor] || colors.transparent;
    },
    borderRadiusClasses() {
      const radii = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      };
      return radii[this.borderRadius] || radii.md;
    },
  },
});
</script>

<style scoped></style>
