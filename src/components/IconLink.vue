<template>
  <router-link
    :class="[{ 'is-secondary': isSecondary }, 'c_icon_link']"
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script>
  export default {
    name: 'ActionLink',
    props: {
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
    align-items: center;
    background-color: var(--c_iconLink_bgColor);
    border: 1px solid var(--c_iconLink_borderColor);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .c_icon_link /deep/ svg {
    fill: var(--c_iconLink_fill);
  }

  .c_icon_link:hover {
    background-color: var(--c_iconLink__hover_bgColor);
  }

  .c_icon_link:hover /deep/ svg {
    fill: var(--c_iconLink__hover_fill);
  }

  .c_icon_button.is-disabled {
    background-color: var(--c_iconLink__disabled_bgColor);
    border: 1px solid var(--c_iconLink__disabled_borderColor);
    pointer-events: none;
  }

  .c_icon_button.is-disabled /deep/ svg {
    fill: var(--c_iconLink__disabled_fill);
  }

  .c_icon_link.is-secondary {
    background-color: var(--c_iconLink_secondary_bgColor);
    border: 1px solid var(--c_iconLink_secondary_borderColor);
  }

  .c_icon_link.is-secondary /deep/ svg {
    fill: var(--c_iconLink_secondary_fill);
  }

  .c_icon_link.is-secondary:hover {
    background-color: var(--c_iconLink_secondary__hover_bgColor);
    border: 1px solid var(--c_iconLink_secondary__hover_borderColor);
  }

  .c_icon_link.is-secondary:hover /deep/ svg {
    fill: var(--c_iconLink_secondary__hover_fill);
  }

  .c_icon_button.is-secondary.is-disabled {
    background-color: var(--c_iconLink_secondary__disabled_bgColor);
    border: 1px solid var(--c_iconLink_secondary__disabled_borderColor);
    pointer-events: none;
  }

  .c_icon_button.is-secondary.is-disabled /deep/ svg {
    fill: var(--c_iconLink_secondary__disabled_fill);
  }
</style>
