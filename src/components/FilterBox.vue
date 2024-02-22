<template>
  <div :class="filter + ' filter-item'" :style="`background-image:url(${url})`">
    <slot></slot>
    <button @click="fire"> 버튼</button>
  </div> 
</template>

<script>
export default {
    name : 'filterbox',
    methods : {
      fire(){
        this.emitter.emit('clickBox', this.filter);
      }
    },
    props : {
        url : String,
        filter : String
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>