<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <RWDTest></RWDTest>
      </div>
      <div class="col-9">
        <RWDTest></RWDTest>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
        <RWDTest></RWDTest>
    </div>
  </div>
</template>

<script>
import RWDTest from '../components/RWDTest.vue'
export default {
  components:{
    RWDTest
  } 
}
</script>