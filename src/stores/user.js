import { defineStore } from "pinia";

// defineStore有兩個參數。1.Store名稱;2.屬性參數
export default defineStore('User Store',{
  // 對應Data，這邊可以直接使用箭頭函式撰寫
  // 同()=>{return{name:'wei}}
  state:()=>({
    name:'wei',
    wallet:300
  }),
  // 對應Computed
  getters:{
    // 變數名稱state不是固定的，但是取state比較直觀。
    getUserName:(state)=>`我的名字是${state.name}`
  },
  // 對應Methods
  actions:{
    updateName(){
      this.name='weiwei'
    }
  }
})
