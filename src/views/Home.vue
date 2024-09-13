<template>
  <UsersTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersTable from "../components/UsersTable.vue";

export default defineComponent({
  name: "Home",
  components: { UsersTable },
});
</script>

<style scoped></style>
