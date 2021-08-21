<template>
  <li class="c_list_sub_header">
    <slot />
  </li>
</template>

<script>
  export default {
    name: 'ListSubHeader',
  };
</script>

<style scoped>
  .c_list_sub_header {
    color: var(--c_listSubHeader_color);
    display: flex;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 7px 0 8px;
    text-transform: uppercase;
    width: 100%;
  }

  .c_list_sub_header:first-child {
    margin: 0 0 8px;
  }
</style>
