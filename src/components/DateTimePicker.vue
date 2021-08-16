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
    background-color: #2c3133;
    color: #a5b7bd;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .vdatetime-popup__header,
  .vdatetime-calendar__month__day--selected > span > span,
  .vdatetime-calendar__month__day--selected:hover > span > span {
    background-color: #353b3d;
  }

  .vdatetime-month-picker__item--selected,
  .vdatetime-time-picker__item--selected {
    color: #ffffff;
  }

  .vdatetime-popup__actions {
    background-color: #353b3d;
    padding: 10px 20px 10px 30px;
  }

  .vdatetime-popup__actions__button {
    color: #a5b7bd;
  }

  .vdatetime-popup__actions__button:hover {
    color: #ffffff;
  }

  .vdatetime-time-picker__list::-webkit-scrollbar-thumb {
    background-color: #636f73;
  }

  .vdatetime-time-picker__list::-webkit-scrollbar-track {
    background: #434b4e;
  }

  .input {
    display: none;
  }
</style>
