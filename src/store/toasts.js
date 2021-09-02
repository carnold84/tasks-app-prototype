import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';

const toasts = {
  actions: {
    add({ commit }, payload) {
      commit('add', {
        id: uuidv4(),
        ...payload,
      });
    },
    remove({ commit }, payload) {
      commit('remove', payload);
    },
  },
  getters: {
    getAll(state) {
      return state.toasts?.all.map((id) => {
        return state.toasts.byId[id];
      });
    },
  },
  mutations: {
    add(state, toast) {
      state.toasts.all.push(toast.id);
      Vue.set(state.toasts.byId, toast.id, toast);
    },
    remove(state, id) {
      Vue.delete(state.toasts.all, state.toasts.all.indexOf(id));
      Vue.delete(state.toasts.byId, id);
    },
  },
  namespaced: true,
  state: {
    toasts: {
      all: [],
      byId: {},
    },
  },
};

export default toasts;
