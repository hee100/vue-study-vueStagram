<template>
<div>
  <Post :data="data" v-for="(data,i) in postdata" :key="i"/>
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