<template>
  <app-view :is-stacked="true" :title="id ? 'Update Task' : 'Add Task'">
    <message-screen v-if="isLoading">Loading...</message-screen>
    <message-screen v-else-if="isSaving">Saving...</message-screen>
    <div v-else>
      <text-field
        v-model="title"
        :isRequired="true"
        label="Title"
        style="margin: 0 0 15px;"
      />
      <date-time-picker
        v-model="dueDate"
        label="Due Date"
        style="margin: 0 0 15px;"
      />
      <text-field
        v-model="notes"
        label="Notes"
        style="height: 150px;"
        type="textArea"
      />
    </div>
    <template v-slot:task-bar-left-content>
      <icon-button @click="onBack">
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
      </icon-button>
    </template>
    <template v-slot:task-bar-center-content>
      <icon-button :is-disabled="title === ''" @click="onAdd">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z"
          />
        </svg>
      </icon-button>
    </template>
  </app-view>
</template>

<script>
  import api from '../api';
  import AppView from '../components/AppView.vue';
  import DateTimePicker from '../components/DateTimePicker.vue';
  import IconButton from '../components/IconButton.vue';
  import MessageScreen from '../components/MessageScreen.vue';
  import TextField from '../components/TextField.vue';

  export default {
    name: 'AddTask',
    components: {
      AppView,
      DateTimePicker,
      IconButton,
      TextField,
      MessageScreen,
    },
    data() {
      return {
        dueDate: undefined,
        isLoading: false,
        isSaving: false,
        notes: '',
        title: '',
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
          this.isLoading = true;

          const task = await api.tasks.getById(this.id);

          this.dueDate = task.dueDate;
          this.notes = task.notes;
          this.title = task.title;

          this.isLoading = false;
        }
      },
      async onAdd() {
        if (this.title !== '') {
          this.isSaving = true;

          const task = {
            dueDate: this.dueDate,
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
      onBack() {
        this.$router.go(-1);
      },
    },
  };
</script>
