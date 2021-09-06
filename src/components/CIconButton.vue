<template>
  <c-button
    class="c_icon_button"
    :isDisabled="isDisabled"
    :isSecondary="isSecondary"
    @click="$emit('click')"
  >
    <slot />
  </c-button>
</template>

<script>
  import CButton from './CButton.vue';

  export default {
    components: { CButton },
    name: 'IconButton',
    props: {
      isDisabled: {
        default: false,
        type: Boolean,
      },
      isSecondary: {
        default: false,
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  .c_icon_button {
    border-radius: 50%;
    height: 40px;
    padding: 0;
    width: 40px;
  }
</style>
