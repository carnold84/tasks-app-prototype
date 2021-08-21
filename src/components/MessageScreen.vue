<template>
  <div class="c_message_screen">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MessageScreen',
  };
</script>

<style scoped>
  .c_message_screen {
    align-items: center;
    color: var(--c_messageScreen_color);
    display: flex;
    flex-grow: 1;
    font-size: 1.4rem;
    justify-content: center;
    margin: 0;
  }
</style>
