import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const state = {
	jokes:[]
}
 const mutations = {
  initjokes(state,jokes_payload){
  state.jokes.push(...jokes_payload);
  },
  initjoke(state,joke_payload){
  state.jokes.unshift(joke_payload);
  },
  removejoke(state,index){
  state.jokes.splice(index,1);
  }
 }
 const actions = {
   initjokes({commit}){
   fetch("https://official-joke-api.appspot.com/random_ten")
   .then(response => response.json())
    .then( json => commit("initjokes",json));
},
 initjoke({commit}){
   fetch("https://official-joke-api.appspot.com/random_joke")
   .then(response => response.json())
    .then( json => commit("initjoke",json));
},
 removejoke({commit},index){
 commit("removejoke",index);
 }
 }
export default new Vuex.Store({
	state,
	mutations,
	actions
})