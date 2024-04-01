import service from "@/utils/request.js";

export const useContextListApi = (chat_id) => {
  return service.get("/context/list/" + chat_id);
};

export const useContextSaveApi = (data) => {
  return service.post("/context/", data);
};
