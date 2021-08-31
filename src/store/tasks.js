import Vue from 'vue';
import api from '../api';

export default {
  actions: {
    async create({ commit }, payload) {
      const response = await api.tasks.create(payload);

      if (response.error) {
        return response.error;
      } else {
        commit('add', response.data);
        return response.data;
      }
    },
    async delete({ commit }, payload) {
      const response = await api.tasks.delete(payload);

      if (response.error) {
        return response.error;
      } else {
        commit('remove', response.data.id);
        return response.data;
      }
    },
    async load({ commit }) {
      const tasks = await api.tasks.getAll();

      commit('load', tasks);
    },
    async update({ commit }, payload) {
      const response = await api.tasks.update(payload);

      if (response.error) {
        return response.error;
      } else {
        commit('update', response.data);
        return response.data;
      }
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
    async add(state, task) {
      state.tasks.all.push(task);
      state.tasks.byId[task.id] = task;
    },
    async load(state, tasks) {
      let nextTasks = {
        all: [],
        byId: {},
      };

      tasks.forEach((element) => {
        nextTasks.all.push(element);
        nextTasks.byId[element.id] = element;
      });

      state.tasks = nextTasks;
    },
    async remove(state, id) {
      state.tasks.all = state.tasks.all.filter((element) => {
        return element.id !== id;
      });
      Vue.delete(state.tasks.byId, id);
    },
    async update(state, task) {
      state.tasks.all = state.tasks.all.map((element) => {
        if (element.id === task.id) {
          return task;
        }

        return element;
      });
      state.tasks.byId[task.id] = task;
    },
  },
  namespaced: true,
  state: {
    tasks: undefined,
  },
};
