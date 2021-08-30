import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTheme: 'default',
    tasks: {
      all: [],
      byId: {},
    },
    user: undefined,
  },
  getters: {
    currentTheme(state) {
      return state.currentTheme;
    },
  },
  mutations: {
    initTheme(state) {
      const theme = localStorage.getItem('tasks-theme') ?? 'default';
      state.currentTheme = theme;

      document.querySelector('html').classList.add(`theme-${theme}`);
    },
    setTheme(state, payload) {
      document
        .querySelector('html')
        .classList.remove(`theme-${state.currentTheme}`);

      state.currentTheme = payload;
      localStorage.setItem('tasks-theme', state.currentTheme);

      document
        .querySelector('html')
        .classList.add(`theme-${state.currentTheme}`);
    },
  },
  actions: {
    initTheme({ commit }) {
      commit('initTheme');
    },
    setTheme({ commit }, payload) {
      commit('setTheme', payload);
    },
  },
  modules: {},
});
