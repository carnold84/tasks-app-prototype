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
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .c_icon_button.is-secondary {
    background-color: transparent;
    opacity: 0.3;
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
</style>
