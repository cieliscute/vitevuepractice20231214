<template>
  {{ user.name }} / {{ user.getUserName }} / {{ user.wallet }}
  <br>
  <button type="button" class="btn btn-primary" @click="user.updateName">user.updateName按鈕</button>
  <hr>
  <h2>解構並透過storeToRefs雙向綁定</h2>
  {{ name }} / {{ getUserName }} / {{ wallet }}
  <button type="button" class="btn btn-primary" @click="updateName">解構updateName按鈕</button>
  <hr>
  <button type="button" class="btn btn-primary me-2" @click="updateByPatch">透過patch修改</button>
  <button type="button" class="btn btn-primary" @click="reset">Reset</button>
</template>
<script>
import { storeToRefs } from 'pinia';
import userStore from '../stores/user';

export default {
  setup() {
    // Composition
    const user = userStore();
    // 因為需要雙向綁定，所以才需要使用storeToRefs
    const { name, getUserName, wallet } = storeToRefs(user);
    // 因為方法不需要雙向綁定，所以直接解構賦值即可
    const { updateName } = user;

    // 修改狀態方法
    // 方法一：直接操作狀態
    user.name = '漂亮阿姨';
    // 方法二：解構取出狀態下
    name.value = '杰倫';

    // 方法三：$patch
    function updateByPatch() {
      user.$patch({
        // 可以指定要修改的項目有哪些，如果只有name就只會修改name
        name: '透過patch更新的Name',
        // 如果有name也有wallet則兩個都會修改
        // wallet: '1000'
      });
    }
    function reset() {
      // 恢復到Store初始狀態
      user.$reset();
    }

    return {
      user,
      name,
      getUserName,
      wallet,
      updateName,
      updateByPatch,
      reset,
    };
  },
};
</script>
<style scoped></style>
