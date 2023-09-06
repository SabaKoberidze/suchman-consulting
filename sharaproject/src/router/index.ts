import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/servicesView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contactView.vue"),
    },
  ],
});


export default router;