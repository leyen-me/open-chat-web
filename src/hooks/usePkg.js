/**
 * 打包Python代码
 */

import { BASE_URL } from "@/constants";
import { ref } from "vue";
import { useUserStore } from "@/stores/modules/userStore";
import { ElLoading, ElMessage } from "element-plus";

const usePkg = async ({ code }) => {
  const loading = ref(false);
  const controller = new AbortController();
  const signal = controller.signal;
  const messages = ref([]);
  const success = ref(false);
  const pkgId = ref("");
  const userStore = useUserStore();
  let loadingService = ElLoading.service({
    fullscreen: true,
    background: "rgba(0,0,0,0.8)",
    text: "打包中...",
  });

  try {
    loading.value = true;
    const response = await fetch(BASE_URL + "/chat/code/pkg", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: userStore.authorization,
      },
      body: JSON.stringify({
        code,
      }),
    });
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      if (!loading.value) {
        controller.abort();
        break;
      }
      const str = decoder.decode(value);
      loadingService.setText(str);
      messages.value.push(str);
    }

    success.value = true;
    pkgId.value = messages.value[messages.value.length - 1].split(":")[1];
    console.log("打包成功结果为", pkgId.value);
  } catch (error) {
    console.log("打包异常", pkgId.value);
  } finally {
    loading.value = false;
    loadingService.close();
  }

  return { pkgId, messages };
};

export default usePkg;
