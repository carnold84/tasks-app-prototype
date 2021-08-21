<template>
  <div id="app">
    <div class="g_app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { EventBus } from './eventBus';
  export default {
    data() {
      return {
        currentTheme: 'dark',
      };
    },
    mounted() {
      this.getTheme();

      EventBus.$on('themeChanged', this.onThemeChanged);
    },
    methods: {
      getTheme() {
        const theme = localStorage.getItem('tasks-theme') ?? 'dark';
        this.setTheme(theme);
      },
      onThemeChanged() {
        const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextTheme);
      },
      setTheme(theme) {
        document
          .querySelector('html')
          .classList.remove(`theme-${this.currentTheme}`);

        this.currentTheme = theme;
        localStorage.setItem('tasks-theme', this.currentTheme);

        document
          .querySelector('html')
          .classList.add(`theme-${this.currentTheme}`);
      },
    },
  };
</script>

<style>
  @import './global.css';
  @import './themes/dark.css';
  @import './themes/light.css';
</style>
