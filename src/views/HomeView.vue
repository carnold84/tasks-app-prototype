<template>
  <app-view :isDisabled="isDisabled" title="Tasks">
    <span v-if="items === undefined" class="g_message">Loading...</span>
    <span v-else-if="items.length === 0" class="g_message">No Tasks</span>
    <ul v-else class="list">
      <template v-for="item of items">
        <list-sub-header v-if="item.type === 'section-header'" :key="item.id">
          {{ item.label }}
        </list-sub-header>
        <list-item
          v-else
          :key="item.id"
          :subTitle="formatDueDate(item.dueDate)"
          :title="item.title"
          :to="`/${item.id}`"
        />
      </template>
    </ul>
    <template v-slot:task-bar-center-content>
      <icon-link class="add-btn" to="/add-task">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" />
        </svg>
      </icon-link>
    </template>
  </app-view>
</template>

<script>
  import api from '../api';
  import { formatFull, formatRelative, getStartOfDay } from '../utils/dates';
  import ListItem from '../components/ListItem.vue';
  import IconLink from '../components/IconLink.vue';
  import AppView from '../components/AppView.vue';
  import ListSubHeader from '../components/ListSubHeader.vue';

  export default {
    name: 'HomeView',
    components: { AppView, IconLink, ListItem, ListSubHeader },
    props: {
      isDisabled: {
        type: Boolean,
      },
    },
    data() {
      return {
        items: undefined,
      };
    },
    methods: {
      formatDueDate(date) {
        if (date) {
          return formatFull(date);
        }
      },
      async loadTasks() {
        const tasks = await api.tasks.getAll();
        let items = [];
        const daysLookup = {};
        const noDueDate = [];

        // group by day
        tasks.forEach((task) => {
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

        this.items = items;
      },
    },
    async mounted() {
      this.loadTasks();
    },
    watch: {
      isDisabled(value) {
        if (value === false) {
          this.loadTasks();
        }
      },
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

  .add-btn {
    height: 60px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    width: 60px;
  }
</style>
