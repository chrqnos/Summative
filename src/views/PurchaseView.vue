<script setup>
import { ref } from "vue";
import SiteModal from "../components/Modal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  await store.getMovies(genre.value);
};
</script>

<template>
  <div class="purchase-container">
    <select v-model="genre" @change="getGenres()">
      <option value="14">Fantasy</option>
      <option value="28">Action</option>
      <option value="10752">War</option>
      <option value="12">Adventure</option>
      <option value="53">Thriller</option>
    </select>
    <RouterLink to="/cart" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Cart</button>
    </RouterLink>
    <div class="poster-container">
      <img
        v-for="movie in store.movies"
        :id="movie.id"
        @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
      />
      <SiteModal
        v-if="showModal"
        @toggleModal="closeModal()"
        :id="selectedId"
      />
    </div>
  </div>
</template>

<style scoped>
img{
  width: 330px;
  margin-top: 15px;
  margin-left: 35px;
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
}
button{
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  margin-left: 90%;
  margin-top: 5px;
}
select{
  border: solid 5px rgb(159, 92, 221);
  border-radius: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  margin-left: 2%;
  margin-top: 5px;
}
</style>