<template>
  <div class="c_text_display">
    <slot name="icon" />
    <div class="content">
      <c-typography class="text" component="p" variant="p">
        {{ text }}
      </c-typography>
      <c-typography v-if="subText" class="sub_text" component="p" variant="p">
        {{ subText }}
      </c-typography>
    </div>
  </div>
</template>

<script>
  import CTypography from './CTypography.vue';

  export default {
    components: { CTypography },
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
    margin: 0;
  }

  .c_text_display .sub_text {
    color: var(--c_textDisplay_subText_color);
    margin: 0;
  }
</style>
