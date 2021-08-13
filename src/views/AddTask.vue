<template>
  <div class="g_page">
    <div class="g_page-body">
      <div class="g_page-header">
        <h2 class="g_page-header-title">
          {{ id ? 'Update Task' : 'Add Task' }}
        </h2>
      </div>
      <div class="g_page-content">
        <text-field
          v-model="title"
          @blur="onBlur"
          :error="error"
          label="Title"
          style="margin: 0 0 15px;"
        />
        <text-field
          v-model="notes"
          label="Notes"
          style="height: 150px;"
          type="textArea"
        />
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
      <button class="add-btn" :disabled="error !== null" @click="onAdd">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z"
          />
        </svg>
        {{ id ? 'Update' : 'Add' }}
      </button>
    </task-bar>
  </div>
</template>

<script>
  import api from '../api';
  import TaskBar from '../components/TaskBar.vue';
  import TextField from '../components/TextField.vue';

  export default {
    name: 'AddTask',
    components: { TaskBar, TextField },
    data() {
      return {
        error: null,
        notes: this.task?.notes ?? '',
        title: this.task?.title ?? '',
        touched: [],
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
      async onAdd() {
        if (!this.error) {
          const task = {
            notes: this.notes,
            title: this.title,
          };
          if (this.id) {
            await api.tasks.update({ ...task, id: this.id });
          } else {
            await api.tasks.create(task);
          }
          this.$router.go(-1);
        }
      },
      onBlur() {
        if (!this.touched.includes('title')) {
          this.touched.push('title');
        }

        if (this.touched.includes('title')) {
          if (this.title === '') {
            this.error = 'Title is required';
          } else {
            this.error = null;
          }
        }
      },
    },
  };
</script>

<style scoped>
  .add-btn {
    align-items: center;
    background-color: #394248;
    border: none;
    border-radius: 20px;
    color: #879ba9;
    display: flex;
    height: 40px;
    justify-content: center;
    justify-self: flex-end;
    padding: 0 20px 0 15px;
  }

  .add-btn:disabled {
    background-color: #2d353a;
    color: #5c6b75;
  }

  .add-btn svg {
    fill: #7a8c98;
    margin: 0 3px 0 0;
  }

  .add-btn:disabled svg {
    fill: #5c6b75;
  }
</style>
