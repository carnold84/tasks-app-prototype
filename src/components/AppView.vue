<template>
  <div
    :class="[
      { 'is-disabled': isDisabled, 'is-stacked': isStacked },
      'c_app_view',
    ]"
  >
    <div class="body" ref="body" @scroll="onScroll">
      <div
        :class="['header', { is_minimised: isTitleMinimised }]"
        :style="{ '--header_inner_height': isTitleMinimised ? '60px' : '94px' }"
      >
        <div class="header_inner">
          <c-typography class="title" component="h2" variant="h2">
            {{ title }}
          </c-typography>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <task-bar>
      <template v-slot:left-content>
        <slot name="task-bar-left-content" />
      </template>
      <template v-slot:center-content>
        <slot name="task-bar-center-content" />
      </template>
      <template v-slot:right-content>
        <slot name="task-bar-right-content" />
      </template>
    </task-bar>
  </div>
</template>

<script>
  import CTypography from './CTypography.vue';
  import TaskBar from './TaskBar.vue';

  export default {
    components: { TaskBar, CTypography },
    name: 'AppView',
    data() {
      return {
        isTitleMinimised: false,
      };
    },
    props: {
      isDisabled: {
        default: false,
        type: Boolean,
      },
      isStacked: {
        default: false,
        type: Boolean,
      },
      title: {
        required: true,
        type: String,
      },
    },
    methods: {
      onScroll() {
        const scrollTop = this.$refs.body.scrollTop;

        if (scrollTop >= 180) {
          this.isTitleMinimised = true;
        } else {
          this.isTitleMinimised = false;
        }
      },
    },
  };
</script>

<style scoped>
  .c_app_view {
    background-color: var(--c_app_view_bgColor);
    display: flex;
    height: 100%;
    flex-direction: column;
    position: absolute;
    transition: transform 400ms ease-in-out;
    width: 100%;
  }

  .c_app_view.is-stacked {
    filter: drop-shadow(var(--c_app_view_dropShadow));
    height: calc(100% - 25px);
    top: 25px;
  }

  .c_app_view.over-enter-active,
  .c_app_view.over-leave-active {
    transition: transform 400ms ease-in-out;
  }

  .c_app_view.over-enter,
  .c_app_view.over-leave-to {
    transform: translateY(calc(100% + 20px));
  }

  .c_app_view.is-disabled {
    overflow: hidden;
    pointer-events: none;
    transform: scale(0.9) translateY(-20px);
  }

  .c_app_view .body {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow: auto;
    width: 100%;
  }

  .c_app_view .header {
    --header_outer_height: 50%;
    --header_height_difference: calc(
      var(--header_outer_height) - var(--header_inner_height)
    );

    align-items: flex-end;
    background-color: var(--c_app_view_header_bgColor);
    background-size: 10px 10px;
    background-image: var(--c_app_view_header_bgImage);
    display: flex;
    filter: drop-shadow(var(--c_app_view_header_dropShadow));
    flex-shrink: 0;
    height: var(--header_outer_height);
    position: sticky;
    top: calc(var(--header_height_difference) * -1);
    z-index: 1;
  }

  .c_app_view .header_inner {
    align-items: center;
    display: flex;
    height: var(--header_inner_height);
    justify-content: flex-start;
    padding: 0 20px;
    position: sticky;
    top: 0;
    transition: all 200ms ease-in-out;
    width: 100%;
  }

  .c_app_view .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    position: relative;
  }

  .c_app_view .title {
    color: var(--c_app_view_title_color);
    font-size: 6rem;
    font-weight: 200;
    margin: 0;
    transition: font-size 200ms ease-in-out;
  }

  .c_app_view .is_minimised .title {
    font-size: 2.8rem;
    font-weight: 200;
    margin: 0;
  }
</style>
