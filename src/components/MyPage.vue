<template>
  <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" @input="search($event.target.value)" />

  <div class="post-header" v-for="(follower, i) in followers" :key="i">
    <div class="profile" :style="`background-image:url(${follower.image})`"></div>
    <span class="profile-name">{{follower.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref, } from 'vue';
import axios from 'axios';

export default {
    name : "mypage",
    props : {
        one : Number,
    },
    setup(){
        let followers = ref([]);
        let followerOriginal = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                followers.value = a.data;
                followerOriginal.value = [...a.data];
            })
        })

        function search(keyWord){
            let newFollower = followerOriginal.value.filter((a)=>{
                return a.name.indexOf(keyWord) != -1
            });
            followers.value = [...newFollower]
    
        }

        
        

        return {followers, search}
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>