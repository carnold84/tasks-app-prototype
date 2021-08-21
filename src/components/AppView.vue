<template>
  <div
    :class="[
      { 'is-disabled': isDisabled, 'is-stacked': isStacked },
      'c_app_view',
    ]"
  >
    <div class="body">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <task-bar>
      <template v-slot:left-content>
        <slot name="task-bar-left-content" />
      </template>
      <template v-slot:center-content>
        <slot name="task-bar-center-content" />
      </template>
      <template v-slot:right-content>
        <slot name="task-bar-right-content" />
      </template>
    </task-bar>
  </div>
</template>

<script>
  import TaskBar from './TaskBar.vue';

  export default {
    components: { TaskBar },
    name: 'AppView',
    props: {
      isDisabled: {
        default: false,
        type: Boolean,
      },
      isStacked: {
        default: false,
        type: Boolean,
      },
      title: {
        required: true,
        type: String,
      },
    },
  };
</script>

<style scoped>
  .c_app_view {
    background-color: var(--neutral1);
    display: flex;
    height: 100%;
    flex-direction: column;
    position: absolute;
    transition: transform 400ms ease-in-out;
    width: 100%;
  }

  .c_app_view.is-stacked {
    background-color: var(--neutral1);
    display: flex;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.5));
    height: calc(100% - 25px);
    flex-direction: column;
    position: absolute;
    top: 25px;
    width: 100%;
  }

  .c_app_view.over-enter-active,
  .c_app_view.over-leave-active {
    transition: transform 400ms ease-in-out;
  }
  .c_app_view.over-enter, .c_app_view.over-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(calc(100% + 20px));
  }

  .c_app_view.is-disabled {
    overflow: hidden;
    pointer-events: none;
    transform: scale(0.9) translateY(-20px);
  }

  .c_app_view .body {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow: auto;
    width: 100%;
  }

  .c_app_view .header {
    background-color: var(--neutral4);
    background-size: 10px 10px;
    background-image: repeating-linear-gradient(
      45deg,
      var(--neutral6) 0,
      var(--neutral6) 1px,
      var(--neutral4) 0,
      var(--neutral4) 50%
    );
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 50%;
    justify-content: flex-end;
    padding: 20px;
  }

  .c_app_view .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    position: relative;
  }

  .c_app_view .title {
    color: var(--text1);
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    margin: 0;
  }
</style>
