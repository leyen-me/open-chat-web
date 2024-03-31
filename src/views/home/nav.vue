<template>
  <div
    class="flex grow flex-col gap-y-0 border-r border-gray-200 bg-white px-6 overflow-y-hidden"
  >
    <div class="border-b -mx-6">
      <a
        href="#"
        class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
        @click="emits('add')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        新增聊天
      </a>
    </div>
    <nav class="flex flex-1 flex-col overflow-y-auto py-4">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <!-- 新增 -->
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li
              v-for="chat in chatList"
              :key="chat.id"
              @click="emits('navClick', chat)"
            >
              <a
                class="flex items-center justify-start cursor-pointer"
                :class="[
                  currentChatId === chat.id
                    ? 'bg-gray-50 !text-indigo-600 font-semibold'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6',
                ]"
              >
                <div class="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                </div>
                <el-text
                  truncated
                  class="flex-1"
                  :class="[
                    currentChatId === chat.id
                      ? 'bg-gray-50 text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  ]"
                >
                  {{ chat.title }}
                </el-text>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- 操作 -->
    <div class="border-t -mx-6">
      <li>
        <a
          @click.prevent="emits('deleteAll')"
          class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          清空聊天
        </a>
        <a
          @click.prevent="emits('logout')"
          class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          退出登录
        </a>
      </li>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentChatId: {
    type: String,
    required: true,
  },
  chatList: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(["add", "deleteAll", "logout", "navClick"]);
</script>
