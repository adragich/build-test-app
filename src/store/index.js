import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postData: {
        name: '',
        feedback: '',
    },
    isRequestVisible: false
  },
  mutations: {
    setName(state, name) {
      state.postData.name = name;
    },
    setFeedback(state, feedback) {
      state.postData.feedback = feedback;
    },
    showRequest(state) {
      state.isRequestVisible = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
