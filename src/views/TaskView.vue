<template>
  <app-view :is-stacked="true" :title="title">
    <message-screen v-if="task === undefined">
      Loading...
    </message-screen>
    <div v-else>
      <text-display :text="notes">
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
      </text-display>
      <text-display :sub-text="fullDueDate" :text="dueDate || 'No Due Date'">
        <template v-slot:icon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM11 18.414L7.293 14.707L8.707 13.293L11 15.586L15.293 11.293L16.707 12.707L11 18.413V18.414Z"
            />
          </svg>
        </template>
      </text-display>
    </div>
    <template v-slot:task-bar-left-content>
      <icon-link to="/">
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
      <icon-link :isSecondary="true" :to="`/task/${task.id}/update`">
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
      </icon-link>
      <icon-button :isSecondary="true" @click="deleteTask">
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
      </icon-button>
    </template>
  </app-view>
</template>

<script>
  import { DateTime } from 'luxon';
  import api from '../api';
  import { formatFull, formatTime } from '../utils/dates';
  import IconLink from '../components/IconLink.vue';
  import IconButton from '../components/IconButton.vue';
  import AppView from '../components/AppView.vue';
  import TextDisplay from '../components/TextDisplay.vue';
  import MessageScreen from '../components/MessageScreen.vue';

  export default {
    name: 'ViewTask',
    data() {
      return {
        isEditing: false,
      };
    },
    components: {
      AppView,
      IconButton,
      IconLink,
      TextDisplay,
      MessageScreen,
    },
    computed: {
      dueDate() {
        if (this.task?.dueDate) {
          const date = DateTime.fromISO(
            this.task?.dueDate
          ).toRelativeCalendar();

          const time = formatTime(this.task?.dueDate);
          return `Due ${date} at ${time}`;
        }

        return null;
      },
      fullDueDate() {
        if (this.task?.dueDate) {
          return formatFull(this.task?.dueDate);
        }

        return null;
      },
      id() {
        return this.$route?.params?.id;
      },
      notes() {
        return this.task?.notes ? this.task.notes : 'No notes';
      },
      task() {
        return this.$store.getters.task(this.id);
      },
      title() {
        return this.task?.title ?? '';
      },
    },
    methods: {
      async deleteTask() {
        if (this.id) {
          await api.tasks.delete(this.id);

          this.$router.go(-1);
        }
      },
    },
  };
</script>
