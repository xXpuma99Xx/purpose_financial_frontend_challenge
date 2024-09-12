<template>
  <router-link
    :class="`text-gray-300 hover:text-white hover:bg-gray-700 p-3 rounded-md text-sm font-medium cursor-pointer mx-1 ${
      active ? 'bg-gray-700' : ''
    }`"
    :to="route"
  >
    {{ option }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "NavBarOption",
  props: {
    option: { type: String, default: "" },
    route: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const active = ref<boolean>(false);
    const updateActiveState = () => (active.value = route.path === props.route);

    watch(() => route.path, updateActiveState, { immediate: true });

    return {
      active,
    };
  },
});
</script>

<style scoped></style>
