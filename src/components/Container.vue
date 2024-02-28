<template>
<div>
  <div v-if="step == 0">
    <Post :postNum="i" :data="data" v-for="(data,i) in postdata" :key="i"/>
  </div>

  <div v-if="step == 1">
    <div :class="selectFilter" class="upload-image" :style="`background-image:url(${url})`"></div>
    <div class="filters">
      <FilterBox :url="url" :filter="filter" v-for="filter in filters" :key=filter>
        {{filter}}
      </FilterBox>
    </div>
  </div> 

  <div v-if="step == 2">
    <div :class="selectFilter" class="upload-image" :style="`background-image:url(${url})`"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea> 
    </div>
  </div>

  <div v-if="step == 3">
    <MyPage/>
  </div>

</div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import MyPage from './MyPage.vue';

export default {
  data() {
    return {
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      selectFilter : ""
    }
  },
  mounted(){
    this.emitter.on('clickBox', (a)=>{
      this.selectFilter = a;
    })
  },
  components: {
    Post: Post,
    FilterBox : FilterBox,
    MyPage : MyPage
  }, 
  props:{
    postdata: Array,
    step : Number,
    url : String
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>