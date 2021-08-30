<template>
  <div class="g_page">
    <message-screen>Loading...</message-screen>
  </div>
</template>

<script>
  import MessageScreen from '../components/MessageScreen.vue';

  export default {
    name: 'LoadingView',
    components: { MessageScreen },
    mounted() {
      console.log('LOADING!!!');
    },
  };
</script>
