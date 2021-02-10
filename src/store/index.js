import {createStore} from 'vuex';

const store = createStore({
  store() {
    return {
      hits: null
    }
  },
  mutations: {
    getHits(state, hits) {
      state.hits = hits;
    },
  },
})

export default store;
