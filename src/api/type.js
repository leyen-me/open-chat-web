import service from "@/utils/request.js";

export const useTypeListApi = () => {
  return service.get("/type/list");
};