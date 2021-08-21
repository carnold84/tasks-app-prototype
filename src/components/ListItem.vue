<template>
  <li class="c_list-item">
    <router-link class="text" :to="to">
      <span class="title">{{ title }}</span>
      <span class="due-date" v-if="subTitle">{{ subTitle }}</span>
    </router-link>
    <router-link :to="`${to}/update`">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4602 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.481L18.52 9.017L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31L15.69 4.774L17.811 2.653C17.9986 2.46522 18.2531 2.35971 18.5185 2.35971C18.7839 2.35971 19.0384 2.46522 19.226 2.653L21.347 4.774C21.5348 4.96157 21.6403 5.21609 21.6403 5.4815C21.6403 5.74691 21.5348 6.00143 21.347 6.189L19.227 8.309L19.226 8.31Z"
        />
      </svg>
    </router-link>
  </li>
</template>

<script>
  export default {
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
    padding: 15px;
    text-decoration: none;
  }

  .c_list-item a:first-child {
    flex-grow: 1;
  }

  .c_list-item .title {
    color: var(--c_listItem_title_color);
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
  }

  .c_list-item .due-date {
    color: var(--c_listItem_dueDate_color);
    font-size: 1.2rem;
    font-weight: 300;
    margin: 6px 0 0;
    text-transform: uppercase;
  }

  .c_list-item svg {
    fill: var(--c_listItem_icon_fill);
    height: 20px;
    width: 20px;
  }
</style>
