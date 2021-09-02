<template>
  <div class="c_toast_manager">
    <transition-group name="slide">
      <c-toast
        v-for="toast of toasts"
        :id="toast.id"
        :key="toast.id"
        :type="toast.type"
        @close="onClose"
      >
        {{ toast.text }}
      </c-toast>
    </transition-group>
  </div>
</template>

<script>
  import CToast from './CToast.vue';

  export default {
    components: { CToast },
    name: 'ToastManager',
    data() {
      return {
        timeouts: {},
      };
    },
    computed: {
      toasts() {
        return this.$store.getters['toasts/getAll'];
      },
    },
    methods: {
      onClose(id) {
        if (this.timeouts[id]) {
          clearTimeout(this.timeouts[id]);
          delete this.timeouts[id];
        }
        this.$store.dispatch('toasts/remove', id);
      },
    },
    watch: {
      toasts(newToasts) {
        newToasts.forEach(({ id, timeout }) => {
          if (timeout && !this.timeouts[id]) {
            this.timeouts[id] = setTimeout(() => {
              this.onClose(id);
            }, timeout);
          }
        });
      },
    },
  };
</script>

<style scoped>
  .c_toast_manager {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 400ms ease-in-out;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateY(-100%);
  }
</style>
