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
        <template #main>
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
            <Typography @click="masDetalles(index)" underline>
              Ver detalles
            </Typography>
          </TableBodyCell>

          <TableBodyCell>
            <Button variant="danger" size="small" @click="eliminar(user)">
              Eliminar
            </Button>
          </TableBodyCell>
        </template>

        <template #details>
          <TableBodyCell
            colspan="5"
            class="bg-gray-50"
            v-if="filaExpandida === index"
          >
            <Typography variant="h5" align="center">
              Detalles adicionales
            </Typography>

            <Typography><strong>Teléfono:</strong> {{ user.phone }}</Typography>

            <Typography>
              <strong>Website:</strong> {{ user.website }}</Typography
            >

            <Typography>
              <strong>Empresa:</strong> {{ user.company.name }}
            </Typography>

            <Typography><strong>Dirección:</strong></Typography>

            <Typography>
              {{ user.address.street }}, {{ user.address.suite }}
            </Typography>

            <Typography>
              {{ user.address.city }}, {{ user.address.zipcode }}
            </Typography>

            <Typography><strong>Geolocalización:</strong></Typography>

            <Typography>
              Latitud: {{ user.address.geo.lat }}, Longitud:
              {{ user.address.geo.lng }}
            </Typography>
          </TableBodyCell>
        </template>
      </TableBodyRow>
    </TableBody>
  </Table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "../types";
import { getUsers } from "../services/usersHTTP";
import Box from "./common/Box.vue";
import Button from "./common/Button.vue";
import Table from "./Table/Table.vue";
import TableBody from "./Table/TableBody.vue";
import TableBodyCell from "./Table/TableBodyCell.vue";
import TableBodyRow from "./Table/TableBodyRow.vue";
import TableHeader from "./Table/TableHeader.vue";
import TableHeaderCell from "./Table/TableHeaderCell.vue";
import Typography from "./common/Typography.vue";

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
      filaExpandida: null as number | null,
    };
  },
  methods: {
    eliminar: (user: User) => {
      console.log(`Eliminar ${user.id}`);
    },
    masDetalles(index: number) {
      this.filaExpandida = this.filaExpandida === index ? null : index;
    },
  },
  async created() {
    this.users = await getUsers<User[]>("/users");
  },
});
</script>

<style scoped></style>
