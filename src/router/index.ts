import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

export enum ERouteNames {
  Main = "Main",
  Operations = "Operations",
  Analytics = "Analytics",
}

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout/MainLayout.vue"),
    redirect: { name: ERouteNames.Main },
    children: [
      {
        path: "/main",
        name: ERouteNames.Main,
        component: () => import("../pages/Main/Main.vue"),
      },
      {
        path: "/operations",
        name: ERouteNames.Operations,
        component: () => import("../pages/Operations/Operations.vue"),
      },
      {
        path: "/analytics",
        name: ERouteNames.Analytics,
        component: () => import("../pages/Analytics/Analytics.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  scrollBehavior: (to, from) => {
    if (to.meta?.saveScroll && from.meta?.saveScroll) {
      return undefined;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
