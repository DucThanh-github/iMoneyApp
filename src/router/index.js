import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Auth guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  console.log("before Enter", user);

  if (!user) next({ name: "Login", prams: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Hey, Hello",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/register",
    meta: {
      layout: "auth",
    },
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    meta: {
      layout: "auth",
    },
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "profile",
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "My report",
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/new-transaction.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
