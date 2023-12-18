<template>
  {{ user }}
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      user:""
    }
  },
  created(){
    let seedbyid=this.$route.params;
    // let seed='81a0b89d11fb45c2';
    axios.get(`https://randomuser.me/api/?seed=${seedbyid}`)
      .then((res)=>{
        this.user=res.data.results;
      })
  },
}
</script>