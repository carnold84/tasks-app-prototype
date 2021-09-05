<template>
  <div class="c_modal_manager">
    <transition-group name="modal">
      <c-modal
        v-for="modal of modals"
        :id="modal.id"
        :key="modal.id"
        :message="modal.text"
        :title="modal.title"
        @accept="onAccept(modal)"
        @cancel="onCancel(modal)"
      />
    </transition-group>
  </div>
</template>

<script>
  import CModal from './CModal.vue';

  export default {
    components: { CModal },
    name: 'ModalManager',
    computed: {
      modals() {
        return this.$store.getters['modals/getAll'];
      },
    },
    mounted() {
      console.log(this.modals);
    },
    methods: {
      onAccept({ id, onAccept }) {
        this.$store.dispatch('modals/remove', id);

        if (onAccept) {
          onAccept();
        }
      },
      onCancel({ id, onCancel }) {
        this.$store.dispatch('modals/remove', id);

        if (onCancel) {
          onCancel();
        }
      },
    },
  };
</script>

<style scoped>
  .c_modal_manager {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
  }
</style>
