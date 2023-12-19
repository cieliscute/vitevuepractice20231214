<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-3">
        <div class="list-group">
          <RouterLink :to="{ name: '新增頁面內的元件A' }" class="list-group-item list-group-item-action" aria-current="true">
            元件A
          </RouterLink>
          <RouterLink to="/newpage/b" class="list-group-item list-group-item-action">
            元件B
          </RouterLink>
          <RouterLink to="/newpage/namedview/c2a" class="list-group-item list-group-item-action">
            C to A
          </RouterLink>
          <RouterLink to="/newpage/namedview/a2b" class="list-group-item list-group-item-action">
            A to B
          </RouterLink>
          <RouterLink to="/newpage/dynamicRouter/81a0b89d11fb45c2" class="list-group-item list-group-item-action">
            DynamicRouter
          </RouterLink>
          <RouterLink to="/newpage/dynamicRouterByProps/81a0b89d11fb45c2" class="list-group-item list-group-item-action">
            DynamicRouter
          </RouterLink>
          <RouterLink to="/newpage/routernavigation" class="list-group-item list-group-item-action">
            RouterNavigation
          </RouterLink>
        </div>
      </div>
      <div class="col-9">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
// import RWDTest from '../components/RWDTest.vue'
export default {
  components: {
    // RWDTest
  }
}
</script>
