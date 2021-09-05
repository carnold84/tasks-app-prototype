import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';

const modals = {
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
      return state.modals.all.map((id) => {
        return state.modals.byId[id];
      });
    },
  },
  mutations: {
    add(state, modal) {
      state.modals.all.push(modal.id);
      Vue.set(state.modals.byId, modal.id, modal);
    },
    remove(state, id) {
      Vue.delete(state.modals.all, state.modals.all.indexOf(id));
      Vue.delete(state.modals.byId, id);
    },
  },
  namespaced: true,
  state: {
    modals: {
      all: [],
      byId: {},
    },
  },
};

export default modals;
