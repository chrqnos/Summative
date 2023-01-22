<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let data = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "64688a2ee40628130c4073aff0308684",
      append_to_response: "videos",
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ data.title }}</h1>
        <h1>Release Date: {{ data.release_date }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" alt="" />
        <iframe :src="`https://www.youtube.com/embed/${data.videos.results
          .filter((video) => video.type === 'Trailer')
          .at(0).key
        }`"></iframe>
        <div class="purchaseButton-container">
          <button @click="
            store.addToCart(props.id, {
              id: data.id,
              poster: data.poster_path,
              title: data.title,
              date: data.release_date,
            })
          ">
            Purchase
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: black;
  color: white;
  width: clamp(480px, 100%, 1300px);
  height: 700px;
  position: relative;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: -5px;
  padding: 1rem;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
}

img {
  float: left;
  margin-top: 10px;
  width: 300px;
  aspect-ratio: 2/3;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
}

iframe {
  width: 630px;
  margin-left: 175px;
  aspect-ratio: 16/9;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  margin-top:40px
}

h1 {
  text-align: center;
}
button{
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  font-size:2rem;
  padding-left:2rem;
  padding-right:2rem;
  position: relative;
  margin-top: 9%;
  margin-left:770px;
  background-color: black;
  color: white;
}
</style>
