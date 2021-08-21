<template>
  <div id="app">
    <div class="g_app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.querySelector('html').classList.add('theme-dark');
    },
  };
</script>

<style>
  @import './global.css';
  @import './themes/dark.css';
  @import './themes/light.css';
</style>
