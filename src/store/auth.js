import api from '../api';

export default {
  actions: {
    async getUser({ commit, state }) {
      if (state.user) {
        return state.user;
      }

      const response = await api.users.getUser();

      if (response.error) {
        return response.error;
      } else {
        commit('setUser', response.data);
        return response.data;
      }
    },
    async signIn({ commit }, payload) {
      const response = await api.users.signIn({
        email: payload.email,
        password: payload.password,
      });

      if (response.error) {
        commit('signInFailure');
      } else {
        commit('signInSuccess', response.data);
      }

      return response;
    },
    async signOut() {
      await api.users.signOut();
    },
  },
  getters: {
    isSignedIn(state) {
      return state.isSignedIn;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    signInFailure(state, user) {
      state.isSignedIn = false;
      state.user = user;
    },
    signInSuccess(state) {
      state.isSignedIn = true;
    },
    signOutSuccess(state) {
      state.isSignedIn = false;
      state.user = null;
    },
  },
  namespaced: true,
  state: {
    isSignedIn: false,
    user: undefined,
  },
};
