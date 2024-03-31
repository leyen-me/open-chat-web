<template>
  <div class="h-full flex justify-center items-center">
    <el-form
      ref="ruleFormRef"
      style="max-width: 700px"
      :model="ruleForm"
      label-width="auto"
      status-icon
    >
      <el-form-item label="Email" prop="email">
        <el-input
          v-model="ruleForm.email"
          type="email"
          placeholder="请输入邮箱"
        />
      </el-form-item>
      <el-form-item label="Login">
        <el-button
          :disabled="!ruleForm.email"
          type="primary"
          @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Cookie from "js-cookie";
import { useUserStore } from "@/stores/modules/userStore";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const ruleForm = reactive({
  email: Cookie.get("Email") || "",
});

const handleLogin = async () => {
  try {
    await userStore.login(ruleForm);
    router.replace("/");
  } catch (error) {
    console.log(error);
    ElMessage.error("登录失败");
  }
};
</script>
