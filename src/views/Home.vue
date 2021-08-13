<template>
  <div class="g_page">
    <div class="g_page-body">
      <div class="g_page-header">
        <h2 class="g_page-header-title">Tasks</h2>
      </div>
      <div class="g_page-content">
        <span v-if="tasks === undefined" class="g_message">Loading...</span>
        <span v-else-if="tasks.length === 0" class="g_message">No Tasks</span>
        <ul v-else class="list">
          <li v-for="task of tasks" :key="task.id" class="list-item">
            <router-link :to="`/${task.id}`">{{ task.title }}</router-link>
            <router-link :to="`/${task.id}/update`">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4602 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.481L18.52 9.017L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31L15.69 4.774L17.811 2.653C17.9986 2.46522 18.2531 2.35971 18.5185 2.35971C18.7839 2.35971 19.0384 2.46522 19.226 2.653L21.347 4.774C21.5348 4.96157 21.6403 5.21609 21.6403 5.4815C21.6403 5.74691 21.5348 6.00143 21.347 6.189L19.227 8.309L19.226 8.31Z"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <task-bar>
      <router-link class="add-btn" to="/add-task">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" />
        </svg>
      </router-link>
    </task-bar>
  </div>
</template>

<script>
  import api from '../api';
  import TaskBar from '../components/TaskBar.vue';

  export default {
    name: 'Home',
    components: { TaskBar },
    data() {
      return {
        tasks: undefined,
      };
    },
    async mounted() {
      this.tasks = await api.tasks.getAll();
    },
  };
</script>

<style scoped>
  .list {
    list-style: none;
    margin: 0;
    padding: 0 0 15px;
  }

  .list-item {
    background-color: #262c30;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 15px;
    width: 100%;
  }

  .list-item a {
    align-items: center;
    color: #ffffff;
    display: flex;
    font-size: 1.4rem;
    padding: 20px;
    text-decoration: none;
  }

  .list-item a:first-child {
    flex-grow: 1;
  }

  .list-item svg {
    fill: #697984;
  }

  .add-btn {
    align-items: center;
    background-color: #394248;
    border-radius: 50%;
    display: flex;
    fill: #697984;
    height: 60px;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    width: 60px;
  }

  .add-btn svg {
    fill: #7a8c98;
  }
</style>
