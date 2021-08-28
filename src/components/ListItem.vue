<template>
  <li class="c_list-item">
    <router-link class="text" :to="to">
      <c-typography class="title">{{ title }}</c-typography>
      <c-typography class="sub_title" v-if="subTitle">{{
        subTitle
      }}</c-typography>
    </router-link>
  </li>
</template>

<script>
  import CTypography from './CTypography.vue';

  export default {
    components: { CTypography },
    name: 'ListItem',
    props: {
      subTitle: String,
      title: {
        required: true,
        type: String,
      },
      to: {
        required: true,
        type: String,
      },
    },
  };
</script>

<style scoped>
  .c_list-item {
    align-items: center;
    background-color: var(--c_listItem_bgColor);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 15px;
    width: 100%;
  }

  .c_list-item .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c_list-item a {
    display: flex;
    padding: 15px 18px;
    text-decoration: none;
  }

  .c_list-item a:first-child {
    flex-grow: 1;
  }

  .c_list-item .title {
    color: var(--c_listItem_title_color);
    margin: 0;
  }

  .c_list-item .sub_title {
    color: var(--c_listItem_subTitle_color);
    font-size: 1.2rem;
    margin: 0;
    text-transform: uppercase;
  }

  .c_list-item svg {
    fill: var(--c_listItem_action_fill);
    height: 20px;
    width: 20px;
  }
</style>
