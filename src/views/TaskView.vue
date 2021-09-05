<template>
  <app-view :is-stacked="true" title="Task">
    <message-screen v-if="task === undefined">
      Loading...
    </message-screen>
    <div v-else>
      <text-field
        v-model="title"
        id="title"
        :is-large="true"
        style="margin: 0 0 15px;"
      />
      <date-time-picker
        v-model="dueDate"
        id="dueDate"
        style="margin: 0 0 15px;"
      />
      <text-field
        v-model="notes"
        id="notes"
        placeholder="No notes"
        type="textarea"
      >
        <template v-slot:icon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19H3V17H15V19ZM21 15H3V13H21V15ZM15 11H3V9H15V11ZM21 7H3V5H21V7Z"
            />
          </svg>
        </template>
      </text-field>
    </div>
    <template v-slot:task-bar-left-content>
      <icon-link :isSecondary="true" to="/">
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
      </icon-link>
    </template>
    <template v-slot:task-bar-center-content>
      <action-button :isDisabled="!hasChanges" @click="onSaveChanges">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z"
          />
        </svg>
      </action-button>
    </template>
    <template v-if="task" v-slot:task-bar-right-content>
      <icon-button :isSecondary="true" @click="onDelete">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z"
          />
        </svg>
      </icon-button>
    </template>
  </app-view>
</template>

<script>
  import Vue from 'vue';
  import IconLink from '../components/IconLink.vue';
  import IconButton from '../components/IconButton.vue';
  import AppView from '../components/AppView.vue';
  import MessageScreen from '../components/MessageScreen.vue';
  import DateTimePicker from '../components/DateTimePicker.vue';
  import TextField from '../components/TextField.vue';
  import ActionButton from '../components/ActionButton.vue';

  export default {
    name: 'ViewTask',
    components: {
      AppView,
      IconButton,
      IconLink,
      MessageScreen,
      DateTimePicker,
      TextField,
      ActionButton,
    },
    data() {
      const id = this.$route?.params?.id;
      const task = this.$store.getters['tasks/getById'](id);

      return {
        changed: {},
        dueDate: task?.dueDate,
        notes: task?.notes,
        originalTask: { ...task },
        title: task?.title,
      };
    },
    computed: {
      hasChanges() {
        console.log(
          this.changed.dueDate || this.changed.notes || this.changed.title
        );
        return this.changed.dueDate || this.changed.notes || this.changed.title;
      },
      id() {
        return this.$route?.params?.id;
      },
      task() {
        return this.$store.getters['tasks/getById'](this.id);
      },
    },
    methods: {
      onDelete() {
        if (this.id) {
          this.$store.dispatch('modals/add', {
            text: `Are you sure you want to delete the task ${this.task.title}?`,
            title: `Delete ${this.task.title}?`,
            onAccept: () => {
              this.$store.dispatch('tasks/delete', this.id);

              this.$router.go(-1);
            },
          });
        }
      },
      onSaveChanges() {
        this.$store.dispatch('tasks/update', {
          id: this.id,
          dueDate: this.dueDate,
          notes: this.notes,
          title: this.title,
        });
        this.$router.go(-1);
      },
    },
    watch: {
      dueDate(newValue) {
        Vue.set(
          this.changed,
          'dueDate',
          newValue !== this.originalTask.dueDate
        );
      },
      notes(newValue) {
        Vue.set(this.changed, 'notes', newValue !== this.originalTask.notes);
      },
      task() {
        this.dueDate = this.task?.dueDate;
        this.notes = this.task?.notes;
        this.title = this.task?.title;
        this.originalTask = {
          ...this.task,
        };
      },
      title(newValue) {
        Vue.set(this.changed, 'title', newValue !== this.originalTask.title);
      },
    },
  };
</script>

<style scoped>
  .save-btn {
    height: 60px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    width: 60px;
  }
</style>
