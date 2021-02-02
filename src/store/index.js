import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    isLoading(state) {
      state.isLoading = true;
    },
    finishedLoading(state) {
      state.isLoading = false;
    },
  },
});

export default store;
