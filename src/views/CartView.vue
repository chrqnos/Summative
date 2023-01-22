<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div v-for="movie in Array.from(store.cart.values())">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
  <div class="text">
    <h1>{{ movie.title }}</h1>
    <h1>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ movie.date }}</h1>
  </div>
    <button @click="store.removeFromCart(movie.id)">Remove</button>
  </div>
</template>

<style scoped>
img {
  width: 330px;
  margin-top: 15px;
  margin-left: 35px;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
}
.text{
  font-size:1rem;
  color:white;
  margin-left:30px;
}
button{
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  margin-left: 5%;
}
</style>
