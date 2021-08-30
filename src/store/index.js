import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
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
    toggleTheme(state) {
      document
        .querySelector('html')
        .classList.remove(`theme-${state.currentTheme}`);

      state.currentTheme =
        state.currentTheme === 'default' ? 'light' : 'default';
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
    toggleTheme({ commit }) {
      commit('toggleTheme');
    },
  },
  modules: {},
});
