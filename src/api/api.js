import { formatISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

/* const state = {
  tasks: [
    {
      created: '2021-08-10T05:26:09.925Z',
      id: '1',
      notes: 'This is task number 1',
      title: 'Task 1',
      updated: '2021-08-10T05:26:52.410Z',
    },
    {
      created: '2021-08-10T05:26:09.925Z',
      id: '2',
      notes: 'This is task number 2',
      title: 'Task 2',
      updated: '2021-08-10T05:26:52.410Z',
    },
    {
      created: '2021-08-10T05:26:09.925Z',
      id: '3',
      notes: 'This is task number 3',
      title: 'Task 4',
      updated: '2021-08-10T05:26:52.410Z',
    }
  ]
}; */

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
        created: formatISO(new Date()),
        id: uuidv4(),
        updated: formatISO(new Date()),
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
            updated: formatISO(new Date()),
          };
          return updatedTask;
        }

        return task;
      });

      await setState(state);

      return updatedTask;
    },
  },
};

export default api;
