<template>
  <div class="g_page">
    <home-view :is-disabled="stackView !== null" />
    <transition name="over">
      <add-task-view v-if="stackView === 'update-task'" />
      <task-view v-if="stackView === 'view-task'" />
    </transition>
  </div>
</template>

<script>
  import AddTaskView from './AddTaskView.vue';
  import HomeView from './HomeView.vue';
  import TaskView from './TaskView.vue';

  export default {
    name: 'MainView',
    components: { AddTaskView, HomeView, TaskView },
    computed: {
      stackView() {
        const { name } = this.$route;

        if (name === 'AddTaskView' || name === 'UpdateTaskView') {
          return 'update-task';
        } else if (name === 'TaskView') {
          return 'view-task';
        }

        return null;
      },
    },
  };
</script>
