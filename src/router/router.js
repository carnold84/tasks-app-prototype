import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';

Vue.use(VueRouter);

const routes = [
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

export default router;
