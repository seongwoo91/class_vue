import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MovieView from "../views/MovieView.vue";
import ContactView from "../views/ContactView.vue";
import ReferView from "../views/ReferView.vue";
import PortView from "../views/PortView.vue";
import YoutubeView from "../views/YoutubeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/refer",
    name: "refer",
    component: ReferView,
  },
  {
    path: "/port",
    name: "port",
    component: PortView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
