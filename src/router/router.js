import Vue from 'vue';
import VueRouter from 'vue-router';
import api from '../api/api';
import MainView from '../views/MainView.vue';
import SignInView from '../views/SignInView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/sign-in',
    name: 'SignInView',
    component: SignInView,
  },
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/add-task',
    name: 'AddTaskView',
    component: MainView,
  },
  {
    path: '/:id',
    name: 'TaskView',
    component: MainView,
  },
  {
    path: '/:id/update',
    name: 'UpdateTaskView',
    component: MainView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let user = null;

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'SignInView' && !user) {
    const user = await api.users.getUser();

    if (user) {
      next();
    } else {
      next({ name: 'SignInView' });
    }
  } else {
    next();
  }
});

export default router;
