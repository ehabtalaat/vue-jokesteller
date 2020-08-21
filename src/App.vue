<template>
  <div id="app">
  <div><h2>Joke Teller</h2>
      <h3>you want hear a joke?</h3>
  </div>
  <button class="btn" @click="initjokes">get jokes</button>
  <button class="btn" @click="initjoke">add joke</button>
  <br>
  <span v-for="type in types" :key="type.indexOf(type)">
    <input type="checkbox"  :value="type" v-model="checkTypes" checked>
    <label>{{type}}</label>
  </span>
  <div class="container">
    <div class="row">
     
  <joke v-for="(joke,index) in $store.state.jokes"
        :key="index"
        :index="index"
        v-show="checkTypes.includes(joke.type)"
        :joke = "joke"
  ></joke>
</div>
</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import joke from "./components/joke"
export default {
  name: 'App',
  data(){
    return{
      types:["general","knock-knock","programming"],
      checkTypes:["general","knock-knock","programming"]
    }
  },
  components: {
    joke
  },
  methods:
  {
    ...mapActions([
      'initjokes',
      'initjoke',
      ])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h2{
  color:#c9485b;
  font-weight: bold;
  font-size: 2.3rem;
  font-style: italic;
}
h3{
  color: #c9485b;
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
}
.btn{
  background-color: #00a79d;
  outline: none;
  border-radius: 15px;
  border: none;
  color: #c9485b;
  margin: 10px;
  font-weight: bold;
  font-size: 1.3rem;
  width: 15rem;
}
.btn:hover ,.btn:focus{
   background-color: #00a79d;
  outline: none;
  border-radius: 15px;
  border: none;
  color: #c9485b;
  margin: 10px;
  font-weight: bold;
  font-size: 1.3rem;
  width: 15rem;
}
input[type="checkbox"]{
  margin-left: 15px;
}
label{
  margin-left: 6px;
  font-size: 1.4rem;
  font-weight: bold;
  font-style: italic;
  color: #c9485b;
}
</style>
