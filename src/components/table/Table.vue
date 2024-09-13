<template>
  <table class="min-w-full divide-y divide-gray-200">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "../../types";
import { getUsers } from "../../services/usersHTTP";
import TableHeaderCell from "./TableHeaderCell.vue";
import TableHeader from "./TableHeader.vue";
import TableBody from "./TableBody.vue";
import TableBodyRow from "./TableBodyRow.vue";
import TableBodyCell from "./TableBodyCell.vue";
import Button from "./Button.vue";
import Box from "./Box.vue";

export default defineComponent({
  name: "UsersTable",
  components: {
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableBodyRow,
    TableBodyCell,
    Button,
    Box,
  },
  data() {
    return {
      users: null as User[] | null,
      tableHeaders: ["Name", "Username", "Email", "Details", ""],
    };
  },
  methods: {
    eliminar: (user: User) => {
      console.log(`Eliminar ${user.id}`);
    },
  },
  async created() {
    this.users = await getUsers<User[]>("/users");
  },
});
</script>

<style scoped></style>
