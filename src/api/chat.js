import service from "@/utils/request.js";

export const useChatListApi = () => {
  return service.get("/chat/list");
};

export const useChatDeleteAllApi = () => {
  return service.delete("/chat/all");
};

export const useChatInfoApi = (chat_id) => {
  return service.get("/chat/" + chat_id);
};

export const useChatCodeRunApi = (data) => {
  return service.post("/chat/code/run", data);
};

export const useChatCodePkgApi = (data) => {
  return service.post("/chat/code/pkg", data);
};

export const useChatCodeAutoRunApi = (chat_id) => {
  return service.post("/chat/code/auto/run/" + chat_id);
};

export const useChatSaveApi = (data) => {
  return service.post("/chat/", data);
};

export const useChatResumeApi = (data) => {
  return service.post("/chat/resume", data);
};
