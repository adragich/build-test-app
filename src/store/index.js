import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    feedback: '',
    isRequestVisible: false
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setFeedback(state, feedback) {
      state.feedback = feedback;
    },
    showRequest(state) {
      state.isRequestVisible = true;
    },
  },
  actions: {
    showRequest({ commit }) {
      commit('showRequest');
    }
  },
  modules: {
  }
})
