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
  props:['id'],
  created(){
    console.log(this.id);
    const seedbyid=this.id;
    axios.get(`https://randomuser.me/api/?seed=${seedbyid}`)
      .then((res)=>{
        this.user=res.data.results;
      })
  },
}
</script>