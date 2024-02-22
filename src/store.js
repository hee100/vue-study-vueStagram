import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : [35,20,24],
      likeClickCheck : false
    }
  },
  mutations: {
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
  }
})

export default store