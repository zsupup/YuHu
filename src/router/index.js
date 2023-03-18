import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    children: [
      // 基本水文信息
      {
        path: "/basic",
        name: "basic",
        component: () => import("../views/basic/index.vue"),
      },
      // 水生态修复效应
      {
        path: "/hydroecology",
        name: "hydroecology",
        component: () => import("../views/hydroecology/index.vue"),
      },
       // 阶段效益数据
       {
        path: "/stageBenefits",
        name: "stageBenefits",
        component: () => import("../views/stageBenefits/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
