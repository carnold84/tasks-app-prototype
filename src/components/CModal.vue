<template>
  <div class="c_modal">
    <div class="modal">
      <c-typography class="title" component="h2" variant="h3">
        {{ title }}
      </c-typography>
      <c-typography class="text">
        {{ title }}
      </c-typography>
      <div class="buttons">
        <button class="btn" @click="$emit('accept', id)">
          {{ acceptText }}
        </button>
        <button class="btn" @click="$emit('cancel', id)">
          {{ declineText }}
        </button>
      </div>
    </div>
    <div class="overlay" />
  </div>
</template>

<script>
  import CTypography from './CTypography.vue';

  export default {
    components: { CTypography },
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
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  .c_modal.modal-enter-active .overlay,
  .c_modal.modal-leave-active .overlay {
    transition: opacity 400ms ease-in-out;
  }

  .c_modal.modal-enter .overlay,
  .c_modal.modal-leave-to .overlay {
    opacity: 0;
  }

  .c_modal .modal {
    background-color: var(--neutral1);
    padding: 20px;
    width: 100%;
    z-index: 1;
  }

  .c_modal.modal-enter-active .modal,
  .c_modal.modal-leave-active .modal {
    transition: transform 400ms ease-in-out;
  }

  .c_modal.modal-enter .modal,
  .c_modal.modal-leave-to .modal {
    transform: translateY(100%);
  }

  .c_modal .title {
    margin: 0;
  }

  .c_modal .text {
    margin: 0;
  }

  .c_modal .button {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
</style>
