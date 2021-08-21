<template>
  <div class="c_task_bar">
    <div class="left-content">
      <slot name="left-content" />
    </div>
    <div class="center-content">
      <slot name="center-content" />
    </div>
    <div class="right-content">
      <slot name="right-content" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskBar',
  };
</script>

<style scoped>
  .c_task_bar {
    background-color: var(--c_taskBar_bgColor);
    filter: drop-shadow(var(--c_taskBar_dropShadow));
    display: flex;
    flex-shrink: 0;
    height: 70px;
    position: relative;
  }

  .c_task_bar .center-content {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 15px;
    transform: translateX(-50%);
  }

  .c_task_bar .left-content {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    left: 15px;
    position: absolute;
    top: 15px;
  }

  .c_task_bar .right-content {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    position: absolute;
    right: 15px;
    top: 15px;
  }
</style>
