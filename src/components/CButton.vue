<template>
  <button
    @click="$emit('click')"
    :class="[
      { 'is-disabled': isDisabled, 'is-secondary': isSecondary },
      'c_button',
    ]"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'CButton',
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
  .c_button {
    align-items: center;
    background-color: var(--c_button_bgColor);
    border: 1px solid var(--c_button_borderColor);
    color: var(--c_button_color);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 0 20px;
  }

  .c_button /deep/ svg {
    fill: var(--c_button_color);
  }

  .c_button:hover {
    background-color: var(--c_button__hover_bgColor);
    color: var(--c_button__hover_color);
  }

  .c_button:hover /deep/ svg {
    fill: var(--c_button__hover_color);
  }

  .c_button.is-disabled {
    background-color: var(--c_button__disabled_bgColor);
    border: 1px solid var(--c_button__disabled_borderColor);
    color: var(--c_button__disabled_color);
    pointer-events: none;
  }

  .c_button.is-disabled /deep/ svg {
    fill: var(--c_button__disabled_color);
  }

  .c_button.is-secondary {
    background-color: var(--c_button_secondary_bgColor);
    border: 1px solid var(--c_button_secondary_borderColor);
    color: var(--c_button_secondary_color);
  }

  .c_button.is-secondary /deep/ svg {
    fill: var(--c_button_secondary_color);
  }

  .c_button.is-secondary:hover {
    background-color: var(--c_button_secondary__hover_bgColor);
    border: 1px solid var(--c_button_secondary__hover_borderColor);
    color: var(--c_button_secondary__hover_color);
  }

  .c_button.is-secondary:hover /deep/ svg {
    fill: var(--c_button_secondary__hover_color);
  }

  .c_button.is-secondary.is-disabled {
    background-color: var(--c_button_secondary__disabled_bgColor);
    border: 1px solid var(--c_button_secondary__disabled_borderColor);
    color: var(--c_button_secondary__disabled_color);
    pointer-events: none;
  }

  .c_button.is-secondary.is-disabled /deep/ svg {
    fill: var(--c_button_secondary__disabled_color);
  }
</style>
