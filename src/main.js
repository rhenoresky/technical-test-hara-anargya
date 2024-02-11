import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import Dashboard from "./views/Dashboard.vue";
import Overview from "./views/Overview.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

createApp(App).use(router).component("Icon", Icon).mount("#app");
