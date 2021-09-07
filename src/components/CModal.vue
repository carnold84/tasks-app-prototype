<template>
  <div class="c_modal">
    <div class="modal">
      <div class="content">
        <c-typography v-if="title" class="title" component="h2" variant="h5">
          {{ title }}
        </c-typography>
        <c-typography class="text">
          {{ message }}
        </c-typography>
      </div>
      <div class="buttons">
        <c-button :is-secondary="true" @click="$emit('cancel', id)">
          {{ declineText }}
        </c-button>
        <c-button @click="$emit('accept', id)">
          {{ acceptText }}
        </c-button>
      </div>
    </div>
    <div class="overlay" />
  </div>
</template>

<script>
  import CButton from './CButton.vue';
  import CTypography from './CTypography.vue';

  export default {
    components: { CTypography, CButton },
    name: 'CModal',
    props: {
      acceptText: {
        default: 'OK',
        type: String,
      },
      declineText: {
        default: 'Cancel',
        type: String,
      },
      id: {
        required: true,
        type: String,
      },
      message: {
        required: true,
        type: String,
      },
      title: {
        type: String,
      },
    },
  };
</script>

<style scoped>
  .c_modal {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .c_modal .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  .c_modal.modal-enter-active .overlay,
  .c_modal.modal-leave-active .overlay {
    transition: opacity 300ms ease-in-out;
  }

  .c_modal.modal-enter .overlay,
  .c_modal.modal-leave-to .overlay {
    opacity: 0;
  }

  .c_modal .modal {
    background-color: var(--neutral3);
    width: 100%;
    z-index: 1;
  }

  .c_modal .content {
    padding: 30px;
  }

  .c_modal.modal-enter-active .modal,
  .c_modal.modal-leave-active .modal {
    transition: transform 300ms ease-in-out;
  }

  .c_modal.modal-enter .modal,
  .c_modal.modal-leave-to .modal {
    transform: translateY(100%);
  }

  .c_modal .title {
    margin: 0 0 5px;
  }

  .c_modal .text {
    margin: 0;
  }

  .c_modal .buttons {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 0 20px 20px;
    width: 100%;
  }

  .c_modal .buttons > * {
    margin: 0 0 0 10px;
  }

  .c_modal .buttons > *:first-child {
    margin: 0;
  }
</style>
