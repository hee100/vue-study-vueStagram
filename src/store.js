import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : [35,20,24],
      likeClickCheck : false,
      more : {}
    }
  },
  mutations: { 
    setMore(state, data){
      state.more = data;
    },
    changeName(state){
      state.name = 'Park'
    },
    upAge(state){
      state.age += 1;
    },
    upLikes(state, postNum){
      if (state.likeClickCheck == false){
        state.likes[postNum]++;
        state.likeClickCheck = true;
      } else{
        state.likes[postNum]--;
        state.likeClickCheck = false;
      }
    }
  },
  actions : {
    getData(context){
      axios.get("https://codingapple1.github.io/vue/more0.json")
      .then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data);
      })
    },
  }
})

export default store