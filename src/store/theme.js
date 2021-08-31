const theme = {
  actions: {
    init({ commit }) {
      const theme = localStorage.getItem('tasks-theme') ?? 'default';

      document.querySelector('html').classList.add(`theme-${theme}`);

      commit('setTheme', theme);
    },
    toggle({ commit, state }) {
      document
        .querySelector('html')
        .classList.remove(`theme-${state.currentTheme}`);

      const nextTheme = state.currentTheme === 'default' ? 'light' : 'default';

      localStorage.setItem('tasks-theme', nextTheme);

      document.querySelector('html').classList.add(`theme-${nextTheme}`);

      commit('setTheme', nextTheme);
    },
  },
  getters: {
    currentTheme(state) {
      return state.currentTheme;
    },
  },
  mutations: {
    setTheme(state, theme) {
      state.currentTheme = theme;
    },
  },
  namespaced: true,
  state: {
    currentTheme: 'default',
  },
};

export default theme;
