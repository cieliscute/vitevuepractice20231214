<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-3">
        <div class="list-group">
          <RouterLink :to="{name:'新增頁面內的元件A'}" class="list-group-item list-group-item-action" aria-current="true">
            元件A
          </RouterLink>
          <RouterLink to="/newpage/b" class="list-group-item list-group-item-action">
            元件B
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
