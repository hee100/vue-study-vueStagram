<template>
<div>
  <!-- <div v-for="(data, i) in postdata" :key = i>
    {{data}}
  </div> -->
  <Post :data="data" v-for="(data,i) in postdata" :key="i"/>
  <!-- <Post /> -->
</div>
</template>

<script>
import Post from './Post.vue';

export default {
  components: {
    Post: Post,
  }, 
  props:{
    postdata: Array,
  }
}
</script>

<style>

</style>