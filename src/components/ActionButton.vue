<template>
  <c-button
    v-bind="$props"
    class="c_action_button"
    :component="component"
    :isDisabled="isDisabled"
    :isSecondary="isSecondary"
    :to="to"
    @click="$emit('click')"
  >
    <slot />
  </c-button>
</template>

<script>
  import CButton from './CButton.vue';

  export default {
    components: { CButton },
    name: 'ActionButton',
    props: {
      component: {
        default() {
          return 'button';
        },
        type: [Object, String],
      },
      isDisabled: {
        default: false,
        type: Boolean,
      },
      isSecondary: {
        default: false,
        type: Boolean,
      },
      to: {
        default: undefined,
        type: [Object, String],
      },
    },
  };
</script>

<style scoped>
  .c_action_button {
    border-radius: 50%;
    height: 60px;
    left: 50%;
    padding: 0;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    width: 60px;
  }
</style>
