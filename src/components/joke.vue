<template>

 <div class="col-md-4">	<div class="card">
		<div class="crd-body">
			<div class="container">
			<h4>{{joke.setup}}</h4>
			<h5>{{joke.punchline}}</h5>
		</div>
			<span @click="removejoke(index)">&times;</span>
		</div>
	</div>
</div>
</template>
<script>
import { mapActions } from "vuex";
	export default{
  props:["joke","index"],
	methods:{
	...mapActions([
    "removejoke"
	])
	}
	};
</script>
<style scoped>
.card{
	background-color: #00a79d;
	border-radius: 15px;
	border: none;
	margin-top:10px;
}
span{
	position: absolute;
	top: 0px;
	right: 8px;
	font-weight: bold;
	font-size: 1.8rem;
	cursor: pointer;
}
span:focus{
	transform: scale(.9);
}
h4{
 color: #c9485b;
 font-size: 1.6rem; 
 font-weight:3rem;
 font-style: italic;
padding: 10px;

 }
 h5{
 color: #c9485b;
 font-size: 1.4rem;
 font-style: italic;
 font-weight: 3rem;
 padding:5px;
 }
</style>