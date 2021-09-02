<template>
  <button
    @click="$emit('click')"
    :class="[{ 'is-secondary': isSecondary }, 'c_icon_button']"
  >
    <slot />
  </button>
</template>

<script>
  export default {
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
    align-items: center;
    background-color: var(--c_iconButton_bgColor);
    border: 1px solid var(--c_iconButton_borderColor);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .c_icon_button /deep/ svg {
    fill: var(--c_iconButton_fill);
  }

  .c_icon_button:hover {
    background-color: var(--c_iconButton__hover_bgColor);
  }

  .c_icon_button:hover /deep/ svg {
    fill: var(--c_iconButton__hover_fill);
  }

  .c_icon_button.is-secondary {
    background-color: var(--c_iconButton_secondary_bgColor);
    border: 1px solid var(--c_iconButton_secondary_borderColor);
  }

  .c_icon_button.is-secondary /deep/ svg {
    fill: var(--c_iconButton_secondary_fill);
  }

  .c_icon_button.is-secondary:hover {
    background-color: var(--c_iconButton_secondary__hover_bgColor);
    border: 1px solid var(--c_iconButton_secondary__hover_borderColor);
  }

  .c_icon_button.is-secondary:hover /deep/ svg {
    fill: var(--c_iconButton_secondary__hover_fill);
  }
</style>
