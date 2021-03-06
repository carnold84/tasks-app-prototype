import { v4 as uuidv4 } from 'uuid';
import { getNowUTC } from '../utils/dates';

const getState = async () => {
  const response = await localStorage.getItem('task_app');

  return response ? JSON.parse(response) : { tasks: [] };
};

const setState = async (state) => {
  return await localStorage.setItem('task_app', JSON.stringify(state));
};

const request = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await callback();

        resolve(response);
      } catch (err) {
        reject(err);
      }
    }, 500);
  });
};

const api = {
  tasks: {
    create: async (data) => {
      return await request(async () => {
        const nextTask = {
          ...data,
          created: getNowUTC(),
          id: uuidv4(),
          updated: getNowUTC(),
        };

        const state = await getState();

        state.tasks.push(nextTask);

        await setState(state);

        return {
          data: nextTask,
        };
      });
    },
    delete: async (id) => {
      return await request(async () => {
        const state = await getState();
        let deletedTask;

        state.tasks = state.tasks.filter((task) => {
          if (task.id !== id) {
            return true;
          } else {
            deletedTask = task;
            return false;
          }
        });

        await setState(state);

        return {
          data: deletedTask,
        };
      });
    },
    getAll: async () => {
      return await request(async () => {
        const state = await getState();

        return state.tasks;
      });
    },
    getById: async (id) => {
      return await request(async () => {
        const state = await getState();

        return state.tasks.filter((task) => {
          return task.id === id;
        })[0];
      });
    },
    update: async (data) => {
      return await request(async () => {
        const state = await getState();
        let updatedTask;

        state.tasks = state.tasks.map((task) => {
          if (task.id === data.id) {
            updatedTask = {
              ...task,
              ...data,
              updated: getNowUTC(),
            };
            return updatedTask;
          }

          return task;
        });

        await setState(state);

        return {
          data: updatedTask,
        };
      });
    },
  },
  users: {
    async getUser() {
      return await request(async () => {
        const state = await getState();

        return {
          data: state.user,
        };
      });
    },
    async signIn({ email, password }) {
      return await request(async () => {
        const state = await getState();

        if (email === 'demo@user.com' && password === 'password') {
          state.user = {
            email: 'demo@user.com',
            id: '1',
            name: 'Demo User',
          };
          await setState(state);

          return {
            data: state.user,
          };
        } else {
          return {
            error: 'Sign in failed.',
          };
        }
      });
    },
    async signOut() {
      return await request(async () => {
        const state = await getState();

        state.user = undefined;
        await setState(state);
      });
    },
  },
};

export default api;
