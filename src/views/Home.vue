<template>
  <UsersTable />
</template>

<script lang="ts">
import UsersTable from "../components/UsersTable.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: { UsersTable },
});
</script>

<style scoped></style>
