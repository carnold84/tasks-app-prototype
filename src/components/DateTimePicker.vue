<template>
  <div>
    <text-field v-model="formattedValue" @focus="onClick" :label="label" />
    <datetime
      v-model="localValue"
      input-class="input"
      ref="dateTime"
      type="datetime"
    ></datetime>
  </div>
</template>

<script>
  import { DateTime } from 'luxon';
  import { Datetime } from 'vue-datetime';
  import 'vue-datetime/dist/vue-datetime.css';
  import TextField from './TextField.vue';

  export default {
    name: 'DateTimePicker',
    components: {
      Datetime,
      TextField,
    },
    props: {
      label: String,
      value: {
        default() {
          return undefined;
        },
        type: String,
      },
    },
    computed: {
      formattedValue() {
        return this.value ? DateTime.fromISO(this.value).toFormat('ff') : null;
      },
      localValue: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      },
    },
    methods: {
      onClick() {
        this.$refs.dateTime.isOpen = true;
      },
    },
  };
</script>

<style>
  .vdatetime-popup {
    background-color: var(--c_dateTimePicker_bgColor);
    color: var(--c_dateTimePicker_color);
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .vdatetime-popup__header,
  .vdatetime-calendar__month__day--selected > span > span,
  .vdatetime-calendar__month__day--selected:hover > span > span {
    background-color: var(--c_dateTimePicker_header_bgColor);
  }

  .vdatetime-month-picker__item--selected,
  .vdatetime-time-picker__item--selected {
    color: var(--c_dateTimePicker_item_color);
  }

  .vdatetime-popup__actions {
    background-color: var(--c_dateTimePicker_actions_bgColor);
    padding: 10px 20px 10px 30px;
  }

  .vdatetime-popup__actions__button {
    color: var(--c_dateTimePicker_actions_button_color);
  }

  .vdatetime-popup__actions__button:hover {
    color: var(--c_dateTimePicker_actions_button__hover_color);
  }

  .vdatetime-time-picker__list::-webkit-scrollbar-thumb {
    background-color: var(--c_dateTimePicker_list_scrollbar_thumb);
  }

  .vdatetime-time-picker__list::-webkit-scrollbar-track {
    background: var(--c_dateTimePicker_list_scrollbar_track);
  }

  .input {
    display: none;
  }
</style>
