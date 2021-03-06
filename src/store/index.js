import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/auth';
import modals from '@/store/modals';
import tasks from '@/store/tasks';
import theme from '@/store/theme';
import toasts from '@/store/toasts';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    modals,
    tasks,
    theme,
    toasts,
  },
});
