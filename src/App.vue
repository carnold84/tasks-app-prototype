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
      this.$store.dispatch('initTheme');
    },
  };
</script>

<style>
  @import './global.css';
  @import './themes/default.css';
  @import './themes/light.css';
</style>
