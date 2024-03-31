import { defineStore } from "pinia";
import { ref } from "vue";
import Cookie from "js-cookie";
import { AUTHORIZATION_NAME } from "@/constants/index.js";
import { useUserLogin, useUserInfoApi } from "@/api/user.js";

export const useUserStore = defineStore("user", () => {
  /**
   * 用户基本信息
   * Basic User Information
   */
  const userInfo = ref({
    email: "",
  });

  /**
   * 用户验证
   * user authorization
   *
   * @type {Ref<UnwrapRef<string>>}
   */
  const authorization = ref(Cookie.get(AUTHORIZATION_NAME));

  /**
   * 获取用户信息
   * Get user information
   *
   * @returns {Promise<void>}
   */
  const getUserInfo = async () => {
    const { data: email } = await useUserInfoApi();
    userInfo.value.email = email;
  };

  /**
   * 登录
   * @param {*} authorization
   */
  const login = async (ruleForm) => {
    const res = await useUserLogin(ruleForm);
    Cookie.set(AUTHORIZATION_NAME, res.data);
    Cookie.set("Email", ruleForm.email);
    authorization.value = res.data;
  };

  /**
   * 退出登录，清空Cookie，清空userStore，reload页面
   * Logout, clear cookies, clear userStore, reload page
   *
   * @constructor
   */
  const logout = () => {
    Cookie.set(AUTHORIZATION_NAME, "");

    userInfo.value.email = "";
    authorization.value = "";
    window.location.reload();
  };

  return { userInfo, authorization, getUserInfo, login, logout };
});
