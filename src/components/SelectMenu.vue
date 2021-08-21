<template>
  <div class="c_select_menu">
    <button @click="onToggleOpen" class="open_btn" ref="elOpen">
      <slot />
    </button>
    <div :class="[{ is_open: isOpen }, 'menu']" :style="menuPosition">
      <button
        class="option_btn"
        v-for="option of options"
        :key="option.id"
        :value="option.value"
        @click="onSelect(option)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectMenu',
    props: {
      options: {
        required: true,
        type: Array,
      },
    },
    data() {
      return {
        isOpen: false,
        menuPosition: {
          bottom: 0,
        },
      };
    },
    methods: {
      onSelect(option) {
        this.$emit('select', option.id, option.value);
        this.isOpen = false;
      },
      onToggleOpen() {
        if (!this.isOpen) {
          const bounds = this.$refs.elOpen.getBoundingClientRect();
          this.menuPosition.bottom = `${bounds.height}px`;
        }

        this.isOpen = !this.isOpen;
      },
    },
  };
</script>

<style scoped>
  .c_select_menu {
    position: relative;
  }

  .c_select_menu .open_btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .c_select_menu /deep/ .open_btn svg {
    fill: var(--c_selectMenu_openBtn_fill);
  }

  .c_select_menu:hover /deep/ .open_btn svg {
    fill: var(--c_selectMenu_openBtn__hover_fill);
  }

  .c_select_menu .menu {
    background-color: var(--c_selectMenu_bgColor);
    bottom: 0;
    display: none;
    filter: drop-shadow(var(--c_selectMenu_dropShadow));
    max-width: 160px;
    position: absolute;
    right: 0;
    width: 1000px;
  }

  .c_select_menu .menu.is_open {
    display: flex;
  }

  .c_select_menu .option_btn {
    background-color: transparent;
    border: none;
    color: var(--c_selectMenu_color);
    cursor: pointer;
    display: flex;
    padding: 12px 15px;
    width: 100%;
  }

  .c_select_menu .option_btn:hover {
    background-color: transparent;
    border: none;
    color: var(--c_selectMenu__hover_color);
    display: flex;
    width: 100%;
  }
</style>
