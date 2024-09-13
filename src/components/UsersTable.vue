<template>
  <Loader v-if="isLoading" />

  <Table class="min-w-full divide-y divide-gray-200" v-else>
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
            <Button variant="danger" size="small" @click="eliminar(index)">
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
              <strong>Website:</strong> {{ user.website }}
            </Typography>

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
import Table from "./table/Table.vue";
import TableBody from "./table/TableBody.vue";
import TableBodyCell from "./table/TableBodyCell.vue";
import TableBodyRow from "./table/TableBodyRow.vue";
import TableHeader from "./table/TableHeader.vue";
import TableHeaderCell from "./table/TableHeaderCell.vue";
import Typography from "./common/Typography.vue";
import Loader from "./common/Loader.vue";

export default defineComponent({
  name: "UsersTable",
  components: {
    Box,
    Button,
    Loader,
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
      isLoading: false,
      users: [] as User[],
      tableHeaders: ["Name", "Username", "Email", "Details", ""],
      filaExpandida: null as number | null,
    };
  },
  methods: {
    cargando() {
      this.isLoading = true;
    },
    detenerCarga() {
      this.isLoading = false;
    },
    eliminar(index: number) {
      if (index > -1) this.users.splice(index, 1);
      this.filaExpandida = null;
      this.saveData();
    },
    masDetalles(index: number) {
      this.filaExpandida = this.filaExpandida === index ? null : index;
    },
    saveData() {
      const usersJson = JSON.stringify(this.users);

      localStorage.setItem("data", usersJson);
    },
  },
  async created() {
    this.cargando();

    const storedData = localStorage.getItem("data");

    if (storedData) {
      let arr: User[] = [];

      try {
        arr = JSON.parse(storedData);
        if (!Array.isArray(arr)) {
          console.error("El dato recuperado no es un array");
          arr = [];
        }
      } catch (e) {
        console.error("Error al parsear el JSON", e);
        arr = [];
      }
      this.users = arr;
    }
    if (this.users.length === 0) {
      this.users = await getUsers<User[]>("/users");
      this.saveData();
    }
    this.detenerCarga();
  },
});
</script>

<style scoped></style>
