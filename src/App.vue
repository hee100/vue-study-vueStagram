<template>
<div class="header">
    <ul class="header-button-left">
      <li @click="step=0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
</div>

  <h4>{{objectName}} {{$store.state.age}} {{$store.state.name}}</h4>
  {{$store.state.more}}
  <button @click="$store.dispatch('getData')">더보기</button>
  <button @click="upAge">숫자</button>
  <button @click="$store.commit('changeName')">버튼</button>
  <Container @write="writeContent = $event" :url="url" :step="step" :postdata="postdata"/>
  <!-- <button @click="more">더보기</button> -->


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
  
</template>

<script>
import Container from './components/Container.vue'
import postdata from './assets/postdata.js'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex';
axios;
export default {
  name: "App",
  data() {
    return {
      postdata : postdata,
      count : 0,
      step : 0,
      url : "" ,
      writeContent : "" ,
      selectFilter : "",
    }
  },
  mounted(){
    this.emitter.on('clickBox', (a)=>{
      console.log(a);
      this.selectFilter = a;
    });
  },
  computed : {
    name(){
      return this.$store.state.name;
    },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({objectName : 'name'})
  },
  methods : {
    ...mapMutations(['setMore', 'upLikes', 'upAge']),
    publish(){
      var myPost = {
      name: "홍길동",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.url,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.writeContent,
      filter: this.selectFilter
    };
    console.log(myPost.filter)
      this.postdata.unshift(myPost);
      this.step = 0; 
    },
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then(result => {
        this.postdata.push(result.data);
        this.count++;
      })
    },
    upload(e) {
      let file = e.target.files;
      console.log(file);
      var url = URL.createObjectURL(file[0]);
      this.url = url;
      console.log(url);
      this.step++;
    }
  },
  components : {
    Container : Container,
  }
}

</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>