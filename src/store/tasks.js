import api from '../api';

export default {
  actions: {
    async load({ commit }) {
      const tasks = await api.tasks.getAll();

      commit('load', tasks);
    },
  },
  getters: {
    getById: (state) => (id) => {
      return state.tasks?.byId[id];
    },
    getAll(state) {
      return state.tasks?.all;
    },
  },
  mutations: {
    async load(state, tasks) {
      let nextTasks = {
        all: [],
        byId: {},
      };

      tasks.forEach((element) => {
        nextTasks.all.push(element);
        nextTasks.byId[element.id] = element;
      });

      console.log(nextTasks);

      state.tasks = nextTasks;
    },
  },
  namespaced: true,
  state: {
    tasks: undefined,
  },
};
