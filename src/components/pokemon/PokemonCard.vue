<template>
  <Card class="max-w-sm mx-auto">
    <CardHeader>
      <Typography variant="h2" color="white">
        {{ data.name.charAt(0).toUpperCase() + data.name.slice(1) }}
      </Typography>
    </CardHeader>

    <CardBody>
      <Typography
        variant="p"
        v-for="element in objectKeys"
        :key="element"
        v-show="showElement(element)"
      >
        {{ element.charAt(0).toUpperCase() + element.slice(1) }}:
        {{ data[element] }}
      </Typography>
    </CardBody>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Box from "./common/Box.vue";
// import Button from "./common/Button.vue";
import Card from "../card/Card.vue";
import CardBody from "../card/CardBody.vue";
import CardHeader from "../card/CardHeader.vue";
import CardFooter from "../card/CardFooter.vue";
import Typography from "../common/Typography.vue";

export default defineComponent({
  name: "PokemonCard",
  props: {
    data: { type: Object, required: true },
  },
  components: {
    // Box,
    // Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
  },
  data() {
    return {};
  },
  methods: {
    showElement(element: string): boolean {
      return typeof this.data[element] !== "object";
    },
  },
  computed: {
    objectKeys(): any {
      return Object.keys(this.data);
    },
  },
});
</script>

<style scoped></style>
