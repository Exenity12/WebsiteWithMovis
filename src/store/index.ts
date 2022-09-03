import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    allFilms: [],
    filmSortByYear: [],
    filmSortByName: [],
    clonListAllFilm: [],
    url: "https://floating-sierra-20135.herokuapp.com/api/movies",
    // url: 'https://floating-sierra-20135.herokuapp.com/api/movie/368539'
    activeFilm: [],
  },
  getters: {
    getAllFilm(state) {
      return state.allFilms;
    },
    getClonAllFilm(state) {
      return state.clonListAllFilm;
    },
    getACtiveFilm(state) {
      return state.activeFilm;
    }
  },
  mutations: {
    updateAllFilm(state, item1){
      state.allFilms = item1;
    },
    updateClonAllFilm(state, item2){
      state.clonListAllFilm = item2;
    },
    updateActiveFilm(state, item3){
      state.activeFilm =item3;
    },
  },
  actions: {
    async fetchFilm(ctx){
      axios
        .get(this.state.url)
        .then(response => {
          ctx.commit("updateAllFilm", response.data.data)
        })
        .catch(error => console.log(error));
    },
    SortFIlmByName(ctx, arr) {
      ctx.commit("updateClonAllFilm", this.state.allFilms)
      ctx.commit("updateAllFilm", arr)
    },
    SortFIlmByYear(ctx, arr) {
      ctx.commit("updateClonAllFilm", this.state.allFilms)
      ctx.commit("updateAllFilm", arr)
    },
    updataMainListFilms(ctx) {
      ctx.commit("updateAllFilm", this.state.clonListAllFilm)
    },
    updateActiveFilm(ctx, item) {
      ctx.commit("updateActiveFilm", item)
    }
  },
  modules: {
  }
})