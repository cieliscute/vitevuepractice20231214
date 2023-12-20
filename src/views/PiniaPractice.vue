<template>
  {{ name }} / {{ getUserName }} / {{ wallet }}
  <br>
  <button type="button" class="btn btn-primary" @click="updateName">更新名稱</button>
</template>
<script>
import userStore from '@/stores/user.js'
import { mapState, mapActions } from 'pinia';
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(userStore,['updateName'])
  },
  // Pinia匯入的狀態只能存放在Computed內？
  computed: {
    // 展開，並且帶入兩個參數。分別為1.Sotre;2.要帶入的state,getters
    ...mapState(userStore, ['name', 'getUserName', 'wallet'])
  }
}
</script>
<style scoped></style>