<template>
  <c-button
    class="c_icon_link"
    component="router-link"
    :isDisabled="isDisabled"
    :isSecondary="isSecondary"
    :to="to"
  >
    <slot />
  </c-button>
</template>

<script>
  import CButton from './CButton.vue';
  export default {
    components: { CButton },
    name: 'ActionLink',
    props: {
      isDisabled: {
        default: false,
        type: Boolean,
      },
      isSecondary: {
        default: false,
        type: Boolean,
      },
      to: {
        required: true,
        type: [Object, String],
      },
    },
  };
</script>

<style scoped>
  .c_icon_link {
    border-radius: 50%;
    height: 40px;
    padding: 0;
    width: 40px;
  }
</style>
