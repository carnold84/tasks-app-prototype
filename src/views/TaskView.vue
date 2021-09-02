<template>
  <app-view :is-stacked="true" title="Task">
    <message-screen v-if="task === undefined">
      Loading...
    </message-screen>
    <div v-else>
      <text-field
        id="title"
        :is-large="true"
        style="margin: 0 0 15px;"
        :value="title"
        @input="onTitleInput"
      />
      <date-time-picker
        v-model="dueDate"
        id="dueDate"
        style="margin: 0 0 15px;"
        @input="onDueDateInput"
      />
      <text-field
        v-model="notes"
        id="notes"
        placeholder="No notes"
        type="textarea"
        @input="onNotesInput"
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
    <template v-if="task" v-slot:task-bar-right-content>
      <icon-button :isSecondary="true" @click="onDelete">
        <svg
          width="20"
          height="20"
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
  import IconLink from '../components/IconLink.vue';
  import IconButton from '../components/IconButton.vue';
  import AppView from '../components/AppView.vue';
  import MessageScreen from '../components/MessageScreen.vue';
  import DateTimePicker from '../components/DateTimePicker.vue';
  import TextField from '../components/TextField.vue';

  export default {
    name: 'ViewTask',
    components: {
      AppView,
      IconButton,
      IconLink,
      MessageScreen,
      DateTimePicker,
      TextField,
    },
    data() {
      const id = this.$route?.params?.id;
      const task = this.$store.getters['tasks/getById'](id);

      return {
        dueDate: task?.dueDate,
        dueDateTimeout: null,
        isEditing: false,
        notes: task?.notes,
        notesTimeout: null,
        title: task?.title,
        titleTimeout: null,
      };
    },
    computed: {
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
          this.$store.dispatch('tasks/delete', this.id);

          this.$router.go(-1);
        }
      },
      async onDueDateInput(value) {
        if (value !== this.dueDate) {
          clearTimeout(this.dueDateTimeout);
          console.log(value);
          this.dueDate = value;

          this.dueDateTimeout = setTimeout(() => {
            this.updateDueDate();
            clearTimeout(this.dueDateTimeout);
          }, 500);
        }
      },
      async onNotesInput(value) {
        if (value !== this.notes) {
          clearTimeout(this.notesTimeout);
          this.notes = value;

          this.notesTimeout = setTimeout(() => {
            this.updateNotes();
            clearTimeout(this.notesTimeout);
          }, 500);
        }
      },
      async onTitleInput(value) {
        if (value !== this.title) {
          clearTimeout(this.titleTimeout);
          this.title = value;

          this.titleTimeout = setTimeout(() => {
            this.updateTitle(this.title);
            clearTimeout(this.titleTimeout);
          }, 500);
        }
      },
      async updateDueDate() {
        await this.$store.dispatch('tasks/update', {
          id: this.id,
          dueDate: this.dueDate,
        });
      },
      async updateNotes() {
        console.log('updateNotes', this.notes);
        await this.$store.dispatch('tasks/update', {
          id: this.id,
          notes: this.notes,
        });
      },
      async updateTitle(title) {
        console.log(title);
        await this.$store.dispatch('tasks/update', {
          id: this.id,
          title,
        });
      },
    },
    watch: {
      task() {
        this.dueDate = this.task?.dueDate;
        this.notes = this.task?.notes;
        this.title = this.task?.title;
      },
    },
  };
</script>
