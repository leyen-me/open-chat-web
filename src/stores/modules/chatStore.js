import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore("chat", () => {
  // const currentChatId = ref(route.params.id);

  return { userInfo, authorization, getUserInfo, login, logout };
});
