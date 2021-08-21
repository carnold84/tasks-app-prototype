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
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .c_icon_link.is-secondary {
    background-color: transparent;
    opacity: 0.3;
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
</style>
