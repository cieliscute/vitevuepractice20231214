<template>
  <div class="d-flex gap-2 flex-wrap">
    <h3 class="w-100">點擊觀看console</h3>
    <button type="button" class="btn btn-secondary" @click="getRouter">getRouter</button>
    <button type="button" class="btn btn-primary" @click="getRoute">getRoute</button>
    <hr class="w-100">
    <div class="w-100">
      <h3>點擊轉換頁面(有歷史記錄)</h3>
      <p>可以帶入字串的路由/物件的name(同RouterLink的to)</p>
      <button type="button" class="btn btn-success me-2" @click="routerPush1">routerPushByString</button>
      <button type="button" class="btn btn-danger" @click="routerPush2">routerPushByName</button>
    </div>
    <hr class="w-100">
    <div class="w-100">
      <h3>點擊轉換頁面(沒有歷史記錄)</h3>
      <button type="button" class="btn btn-warning" @click="routerReplace">routerReplace</button>
    </div>
    <hr class="w-100">
    <div class="w-100">
      <h3>-1代表回到上一頁</h3>
      <button type="button" class="btn btn-info" @click="routerGo">routerGo</button>
    </div>
    <hr class="w-100">
    <div class="w-100">
      <h3>臨時新增路由</h3>
      <button type="button" class="btn btn-primary" @click="routerAddRoute">routerAddRoute</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    getRoute() {
      console.log(this.$route);
    },
    getRouter() {
      console.log(this.$router);
    },
    routerPush1() {
      this.$router.push('/newpage/dynamicRouterByProps/81a0b89d11fb45c2');
    },
    routerPush2() {
      this.$router.push({
        name: '新增頁面內的元件A'
      });
    },
    routerReplace() {
      this.$router.replace({
        name: '新增頁面內的元件A'
      });
    },
    routerGo() {
      this.$router.go(-1);
    },
    routerAddRoute() {
      this.$router.addRoute({
        path: '/newabout',
        name: 'newabout',
        component: () => import('@/views/AboutView.vue')
      })
    }
  },
  created(){
      console.log(this.$route.params)
      console.log(this.$route.query)
  }
}
</script>