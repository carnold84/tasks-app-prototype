<template>
  <div :class="['c_toast', `is_${type}`]">
    <c-typography class="text">
      <slot />
    </c-typography>
    <button class="close_btn" @click="$emit('close', id)">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
  import CTypography from './CTypography.vue';

  export default {
    components: { CTypography },
    name: 'CToast',
    props: {
      id: {
        required: true,
        type: String,
      },
      subText: String,
      type: {
        default: 'info',
        type: String,
      },
    },
  };
</script>

<style scoped>
  .c_toast {
    align-items: center;
    display: flex;
  }

  .c_toast.is_error {
    background-color: var(--c_toast_bgColor_error);
  }

  .c_toast.is_info {
    background-color: var(--c_toast_bgColor_info);
  }

  .c_toast.is_warn {
    background-color: var(--c_toast_bgColor_warn);
  }

  .c_toast .close_btn {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    fill: var(--c_toast_color);
    height: 40px;
    justify-content: center;
    padding: 0;
    width: 40px;
  }

  .c_toast .close_btn /deep/ svg {
    height: 20px;
    width: 20px;
  }

  .c_toast .text {
    flex-grow: 1;
    margin: 0;
    padding: 10px 15px;
  }
</style>
