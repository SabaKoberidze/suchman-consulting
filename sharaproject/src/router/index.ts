import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
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
      path: "/about",
      name: "about",
      component: () => import("../views/aboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contactView.vue"),
    },
  ],
});


export default router;