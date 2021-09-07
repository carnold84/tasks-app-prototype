<template>
  <div :class="['c_date_time_picker', , { is_readonly: isReadonly }]">
    <div v-on="isReadonly ? {} : { click: onClick }" class="content">
      <svg
        class="icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM11 18.414L7.293 14.707L8.707 13.293L11 15.586L15.293 11.293L16.707 12.707L11 18.413V18.414Z"
        />
      </svg>
      <div class="text">
        <c-typography class="main_text">{{
          relativeValue || placeholder
        }}</c-typography>
        <c-typography class="sub_text">{{
          formattedValue || placeholder
        }}</c-typography>
      </div>
    </div>
    <datetime
      input-class="input"
      ref="dateTime"
      type="datetime"
      :value="value"
      @input="onInput"
    ></datetime>
  </div>
</template>

<script>
  import { Datetime } from 'vue-datetime';
  import 'vue-datetime/dist/vue-datetime.css';
  import { formatFull, formatRelative } from '../utils/dates';
  import CTypography from './CTypography.vue';

  export default {
    name: 'DateTimePicker',
    components: {
      Datetime,
      CTypography,
    },
    props: {
      id: {
        required: true,
        type: String,
      },
      label: String,
      placeholder: String,
      isReadonly: {
        default() {
          return false;
        },
        type: Boolean,
      },
      value: {
        default() {
          return undefined;
        },
        type: String,
      },
    },
    computed: {
      formattedValue() {
        return this.value ? formatFull(this.value) : null;
      },
      relativeValue() {
        return this.value ? formatRelative(this.value, true) : null;
      },
    },
    methods: {
      onClick() {
        this.$refs.dateTime.isOpen = true;
      },
      onInput(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style>
  .c_date_time_picker {
    cursor: pointer;
    width: 100%;
  }

  .c_date_time_picker.is_readonly {
    cursor: default;
  }

  .c_date_time_picker .icon {
    height: 22px;
    fill: var(--c_dateTimePicker_icon_fill);
    margin: 0 10px 0 0;
    width: 22px;
  }

  .c_date_time_picker .content {
    align-items: center;
    display: flex;
  }

  .c_date_time_picker .text {
    display: flex;
    flex-direction: column;
  }

  .c_date_time_picker .main_text {
    margin: 0;
  }

  .c_date_time_picker .sub_text {
    color: var(--c_dateTimePicker_subText_color);
    margin: 0;
  }

  .vdatetime-popup {
    background-color: var(--c_dateTimePicker_bgColor);
    color: var(--c_dateTimePicker_color);
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .vdatetime-popup__header {
    background-color: var(--c_dateTimePicker_header_bgColor);
    color: var(--c_dateTimePicker_header_color);
  }

  .vdatetime-calendar__month__day:hover > span > span {
    background-color: var(--c_dateTimePicker_monthDay__hover_bgColor);
  }

  .vdatetime-calendar__month__day--selected > span > span {
    background-color: var(--c_dateTimePicker_monthDay__selected_bgColor);
  }

  .vdatetime-calendar__month__day--selected:hover > span > span {
    background-color: var(--c_dateTimePicker_monthDay__selected__hover_bgColor);
  }

  .vdatetime-month-picker__item--selected,
  .vdatetime-time-picker__item--selected {
    color: var(--c_dateTimePicker_item_color);
  }

  .vdatetime-calendar__navigation--previous svg path,
  .vdatetime-calendar__navigation--next svg path {
    stroke: var(--c_dateTimePicker_navigation_button_stroke);
  }

  .vdatetime-calendar__navigation--previous:hover svg path,
  .vdatetime-calendar__navigation--next:hover svg path {
    stroke: var(--c_dateTimePicker_navigation_button__hover_stroke);
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
