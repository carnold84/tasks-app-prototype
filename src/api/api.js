import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

const getState = async () => {
  const response = await localStorage.getItem('task_app');

  return response ? JSON.parse(response) : { tasks: [] };
};

const setState = async (state) => {
  return await localStorage.setItem('task_app', JSON.stringify(state));
};

const api = {
  tasks: {
    create: async (data) => {
      const nextTask = {
        ...data,
        created: DateTime.now().toString(),
        id: uuidv4(),
        updated: DateTime.now().toString(),
      };

      const state = await getState();

      state.tasks.push(nextTask);

      await setState(state);

      return nextTask;
    },
    delete: async (id) => {
      const state = await getState();

      state.tasks = state.tasks.filter((task) => {
        return task.id !== id;
      });

      await setState(state);

      return id;
    },
    getAll: async () => {
      const state = await getState();

      return state.tasks;
    },
    getById: async (id) => {
      const state = await getState();

      return state.tasks.filter((task) => {
        return task.id === id;
      })[0];
    },
    update: async (data) => {
      const state = await getState();
      let updatedTask;

      state.tasks = state.tasks.map((task) => {
        if (task.id === data.id) {
          updatedTask = {
            ...task,
            ...data,
            updated: DateTime.now().toString(),
          };
          return updatedTask;
        }

        return task;
      });

      await setState(state);

      return updatedTask;
    },
  },
  users: {
    async getUser() {
      const state = await getState();

      return state.user;
    },
    async signIn({ email, password }) {
      const state = await getState();

      if (email === 'demo@user.com' && password === 'password') {
        state.user = {
          email: 'demo@user.com',
          id: '1',
          name: 'Demo User',
        };
        await setState(state);
        return state.user;
      } else {
        return undefined;
      }
    },
    async signOut() {
      const state = await getState();

      state.user = undefined;
      await setState(state);
    },
  },
};

export default api;
