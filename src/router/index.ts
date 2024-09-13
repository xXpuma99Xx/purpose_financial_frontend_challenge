import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Buscador from "../views/Buscador.vue";
import Cv from "../views/Cv.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buscador",
    name: "Buscador",
    component: Buscador,
  },
  {
    path: "/cv",
    name: "CV",
    component: Cv,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
