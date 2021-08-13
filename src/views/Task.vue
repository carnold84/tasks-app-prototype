<template>
  <div class="g_page">
    <div class="g_page-body">
      <div class="g_page-header">
        <h2 class="g_page-header-title">{{ title }}</h2>
      </div>
      <div class="g_page-content">
        <p class="notes">{{ notes }}</p>
      </div>
    </div>
    <task-bar>
      <template v-slot:left-content>
        <router-link class="g_back-btn" to="/">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"
            />
          </svg>
        </router-link>
      </template>
      <template v-slot:right-content>
        <button @click="deleteTask" class="delete-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z"
            />
          </svg>
        </button>
      </template>
    </task-bar>
  </div>
</template>

<script>
  import api from '../api';
  import TaskBar from '../components/TaskBar.vue';

  export default {
    name: 'Task',
    components: { TaskBar },
    data() {
      return {
        notes: this.task?.notes ?? '',
        title: this.task?.title ?? '',
      };
    },
    computed: {
      id() {
        return this.$route?.params?.id;
      },
    },
    mounted() {
      this.getTask();
    },
    methods: {
      async getTask() {
        if (this.id) {
          const task = await api.tasks.getById(this.id);

          this.notes = task.notes;
          this.title = task.title;
        }
      },
      async deleteTask() {
        if (this.id) {
          await api.tasks.delete(this.id);

          this.$router.go(-1);
        }
      },
    },
  };
</script>

<style scoped>
  .task h3 {
    color: #c1c9d0;
    font-size: 2.6rem;
  }

  .notes {
    color: #c1c9d0;
    font-size: 1.4rem;
    margin: 0;
  }

  .delete-btn {
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  .delete-btn svg {
    fill: #5a676f;
  }
</style>
