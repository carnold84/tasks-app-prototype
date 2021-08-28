<template>
  <c-typography class="c_message_screen">
    <slot />
  </c-typography>
</template>

<script>
  import CTypography from './CTypography.vue';

  export default {
    components: { CTypography },
    name: 'MessageScreen',
  };
</script>

<style scoped>
  .c_message_screen {
    align-items: center;
    color: var(--c_messageScreen_color);
    display: flex;
    flex-grow: 1;
    justify-content: center;
    margin: 0;
  }
</style>
