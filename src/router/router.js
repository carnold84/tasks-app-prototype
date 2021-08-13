import Vue from 'vue';
import VueRouter from 'vue-router';
import AddTask from '../views/AddTask.vue';
import Home from '../views/Home.vue';
import Task from '../views/Task.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-task',
    name: 'AddTask',
    component: AddTask,
  },
  {
    path: '/:id',
    name: 'Task',
    component: Task,
  },
  {
    path: '/:id/update',
    name: 'UpdateTask',
    component: AddTask,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
