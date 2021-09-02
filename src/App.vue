<template>
  <div id="app">
    <div class="g_app-content">
      <toast-manager />
      <router-view />
    </div>
  </div>
</template>

<script>
  import ToastManager from './components/ToastManager.vue';

  export default {
    components: {
      ToastManager,
    },
    mounted() {
      this.$store.dispatch('theme/init');
    },
  };
</script>

<style>
  @import './global.css';
  @import './themes/default.css';
  @import './themes/light.css';
</style>
