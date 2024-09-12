<template>
  <Table class="min-w-full divide-y divide-gray-200">
    <TableHeader>
      <TableHeaderCell
        v-for="(header, index) in tableHeaders"
        :key="index"
        :title="header"
      />
    </TableHeader>

    <TableBody class="bg-white divide-y divide-gray-200">
      <TableBodyRow v-for="(user, index) in users" :key="index" :index="index">
        <TableBodyCell>
          <Typography>{{ user.name }}</Typography>
        </TableBodyCell>

        <TableBodyCell>
          <Typography>{{ user.username }}</Typography>
        </TableBodyCell>

        <TableBodyCell>
          <Typography>{{ user.email }}</Typography>
        </TableBodyCell>

        <TableBodyCell>
          <Typography underline>Ver detalles</Typography>
        </TableBodyCell>

        <TableBodyCell>
          <Button variant="danger" size="small" :onclick="() => eliminar(user)">
            Eliminar
          </Button>
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "../types";
import { getUsers } from "../services/";
import Box from "./Box.vue";
import Button from "./Button.vue";
import Table from "./Table.vue";
import TableBody from "./TableBody.vue";
import TableBodyCell from "./TableBodyCell.vue";
import TableBodyRow from "./TableBodyRow.vue";
import TableHeader from "./TableHeader.vue";
import TableHeaderCell from "./TableHeaderCell.vue";
import Typography from "./Typography.vue";

export default defineComponent({
  name: "UsersTable",
  components: {
    Box,
    Button,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHeader,
    TableHeaderCell,
    Typography,
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
