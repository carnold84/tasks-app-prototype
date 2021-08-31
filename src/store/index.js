import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/auth';
import tasks from '@/store/tasks';
import theme from '@/store/theme';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    tasks,
    theme,
  },
});
