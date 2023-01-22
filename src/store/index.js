import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
    }
  },
  actions: {
    async getMovies(id) {
      let data = (await axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "64688a2ee40628130c4073aff0308684",
          with_genres: id,
          include_adult: false,
        }
      })).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
        }
      });
    },
    addToCart(id, data) {
      this.cart.set(id, data);
    },
    removeFromCart(id) {
      this.cart.delete(id);
    }
  }
});