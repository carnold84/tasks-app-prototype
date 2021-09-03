<template>
  <div id="app">
    <div class="g_app-content">
      <modal-manager />
      <toast-manager />
      <router-view />
    </div>
  </div>
</template>

<script>
  import ModalManager from './components/ModalManager.vue';
  import ToastManager from './components/ToastManager.vue';

  export default {
    components: {
      ToastManager,
      ModalManager,
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
