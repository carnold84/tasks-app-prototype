<template>
  <app-view :isDisabled="isDisabled" title="Tasks">
    <message-screen v-if="items === undefined">
      Loading...
    </message-screen>
    <message-screen v-else-if="items.length === 0">
      No Tasks
    </message-screen>
    <ul v-else class="list">
      <template v-for="item of items">
        <c-list-sub-header v-if="item.type === 'section-header'" :key="item.id">
          {{ item.label }}
        </c-list-sub-header>
        <c-list-item
          v-else
          :key="item.id"
          :subTitle="formatDueDate(item.dueDate)"
          :title="item.title"
          :to="`/task/${item.id}`"
        >
          <template v-if="item.dueDate" v-slot:controls>
            <c-icon-button :isSecondary="true" @click="onNextDay(item.id)">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM13 18H11V16H9V14H11V12H13V14H15V16H13V18Z"
                />
              </svg>
            </c-icon-button>
          </template>
        </c-list-item>
      </template>
    </ul>
    <template v-slot:task-bar-center-content>
      <action-button component="router-link" to="/add-task">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" />
        </svg>
      </action-button>
    </template>
    <template v-slot:task-bar-right-content>
      <select-menu
        :options="[
          {
            id: 'theme',
            label: `Toggle theme`,
            value: true,
          },
          {
            id: 'sign-out',
            label: `Sign Out`,
            value: true,
          },
        ]"
        @select="onSelect"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z"
            fill="inherit"
          />
        </svg>
      </select-menu>
    </template>
  </app-view>
</template>

<script>
  import { formatFull, formatRelative, getStartOfDay } from '../utils/dates';
  import AppView from '../components/AppView.vue';
  import CListItem from '../components/CListItem.vue';
  import CListSubHeader from '../components/CListSubHeader.vue';
  import MessageScreen from '../components/MessageScreen.vue';
  import SelectMenu from '../components/SelectMenu.vue';
  import ActionButton from '../components/ActionButton.vue';
  import CIconButton from '../components/CIconButton.vue';

  export default {
    name: 'HomeView',
    components: {
      AppView,
      CIconButton,
      CListItem,
      CListSubHeader,
      MessageScreen,
      SelectMenu,
      ActionButton,
    },
    props: {
      isDisabled: {
        type: Boolean,
      },
    },
    computed: {
      items() {
        if (this.tasks) {
          let items = [];
          const daysLookup = {};
          const noDueDate = [];

          // group by day
          this.tasks.forEach((task) => {
            if (task.dueDate) {
              const startOfDay = getStartOfDay(task.dueDate);

              if (daysLookup[startOfDay] === undefined) {
                daysLookup[startOfDay] = [];
              }
              daysLookup[startOfDay].push(task);
            } else {
              noDueDate.push(task);
            }
          });

          // convert lookup to array and sort by key (day)
          const days = Object.entries(daysLookup).sort(([keyA], [keyB]) => {
            return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
          });

          // add tasks to items array with section headers
          for (const [day, tasks] of days) {
            items.push({
              label: formatRelative(day),
              type: 'section-header',
            });
            tasks.sort(function(a, b) {
              return a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0;
            });
            items.push(...tasks);
          }

          // add section for no due date
          if (noDueDate.length > 0) {
            items.push({
              label: 'No Reminder',
              type: 'section-header',
            });
            items.push(...noDueDate);
          }

          return items;
        }

        return undefined;
      },
      tasks() {
        return this.$store.getters['tasks/getAll'];
      },
    },
    methods: {
      formatDueDate(date) {
        if (date) {
          return formatFull(date);
        }
      },
      onNextDay(id) {
        this.$store.dispatch('tasks/addOneDay', id);
      },
      async onSelect(id) {
        if (id === 'theme') {
          this.$store.dispatch('theme/toggle');
        } else if (id === 'sign-out') {
          await this.$store.dispatch('auth/signOut');
          this.$router.push('/sign-in');
        }
      },
    },
    async mounted() {
      this.$store.dispatch('tasks/load');
    },
  };
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0 0 15px;
  }
</style>
