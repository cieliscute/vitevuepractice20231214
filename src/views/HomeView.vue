<template>
  <div class="home">
    <h2>home</h2>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import userStore from '@/stores/user.js'
import { mapState } from 'pinia';
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState(userStore, ['name'])
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
