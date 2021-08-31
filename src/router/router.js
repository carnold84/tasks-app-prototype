import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
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
    path: '/task/:id',
    name: 'TaskView',
    component: MainView,
  },
  {
    path: '/task/:id/update',
    name: 'UpdateTaskView',
    component: MainView,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let user = null;

router.beforeEach(async (to, from, next) => {
  if (!user) {
    user = await store.dispatch('auth/getUser');

    console.log(user, to);

    if (user) {
      if (to.name === 'SignInView') {
        next({ name: 'MainView' });
      } else {
        next();
      }
    } else if (!user && to.name === 'SignInView') {
      next();
    } else {
      next({ name: 'SignInView' });
    }
  } else {
    next();
  }
});

export default router;
