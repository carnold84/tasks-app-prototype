<template>
  <div class="c_text_display">
    <slot name="icon" />
    <div class="content">
      <p class="text">{{ text }}</p>
      <p v-if="subText" class="sub_text">{{ subText }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TextDisplay',
    props: {
      subText: String,
      text: {
        required: true,
        type: String,
      },
    },
  };
</script>

<style scoped>
  .c_text_display {
    align-items: center;
    display: flex;
    margin: 0 0 10px;
  }

  .c_text_display /deep/ svg {
    fill: var(--c_textDisplay_icon_fill);
    height: 20px;
    margin: 0 10px 0 0;
    width: 20px;
  }

  .c_text_display .content {
    display: flex;
    flex-direction: column;
  }

  .c_text_display .text {
    color: var(--c_textDisplay_text_color);
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 0 6px;
  }

  .c_text_display .sub_text {
    color: var(--c_textDisplay_subText_color);
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0;
  }
</style>
