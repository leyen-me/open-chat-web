import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/index.vue";
import ChatView from "@/views/chat/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: "/c/new",
      children: [
        {
          path: "/c/:id",
          name: "chat",
          component: ChatView,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
    },
  ],
});

export default router;
