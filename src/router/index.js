import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    path: "/register",
    meta: {
      layout: "auth",
    },
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/register.vue"),
  },
  {
    path: "/login",
    meta: {
      layout: "auth",
    },
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
