import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Registration from "../components/ForRegestration/Regestration.vue";
import Map from "../components/Map.vue";
import insideRegestration from "../components/ForRegestration/insideRegestration.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/reg",
      component: Registration,
    },

    {
      path: "/Map",
      component: Map,
    },

    {
      path: "/Registry/:id",
      name: "register",
      component: insideRegestration,
      props: true
    },
  ],
});

router.beforeEach(async (to, from) => {
  if(to.fullPath === '/last'){
    return { name: "Home" };
  }

});

export default router;
