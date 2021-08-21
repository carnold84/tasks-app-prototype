<template>
  <div class="c_text-field">
    <label v-if="label">{{ `${label}${isRequired ? '*' : ''}` }}</label>
    <textarea
      v-if="type === 'textArea'"
      v-model="inputVal"
      @blur="onBlur"
      @focus="onFocus"
      class="field"
    />
    <input
      v-else
      v-model="inputVal"
      @blur="onBlur"
      @focus="onFocus"
      class="field"
      :type="type"
    />
    <span v-if="error" class="error">
      {{ error }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'TextField',
    data() {
      return {
        error: null,
        touched: false,
      };
    },
    props: {
      isRequired: {
        default() {
          return false;
        },
        type: Boolean,
      },
      label: String,
      type: {
        default() {
          return 'text';
        },
        type: String,
      },
      value: {
        default() {
          return '';
        },
        type: String,
      },
    },
    methods: {
      onBlur() {
        this.validate();

        this.$emit('blur');
      },
      onFocus() {
        if (!this.touched) {
          this.touched = true;
        }

        this.$emit('focus');
      },
      validate() {
        let isValid = true;

        if (this.touched) {
          if (this.isRequired && this.inputVal === '') {
            this.error = this.label
              ? `${this.label} is required`
              : 'Field is required';
            isValid = false;
          } else {
            this.error = null;
          }
        }

        this.isValid = isValid;
      },
    },
    computed: {
      inputVal: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        },
      },
    },
    watch: {
      value() {
        // validate input when passed into to check if it's blank
        this.validate();
      },
    },
  };
</script>

<style scoped>
  .c_text-field {
    display: flex;
    flex-direction: column;
  }

  .c_text-field label {
    color: var(--c_textField_label_color);
    font-size: 1.3rem;
    font-weight: 300;
    margin: 0 0 4px;
  }

  .c_text-field .field {
    background-color: var(--c_textField_field_bgColor);
    border: 1px solid var(--c-textField-field-borderColor);
    border-radius: 10px;
    color: var(--c_textField_field_color);
    font-family: inherit;
    font-size: 1.4rem;
    margin: 0 0 2px;
    padding: 10px 13px;
  }

  .c_text-field textarea.field {
    flex-grow: 1;
  }

  .c_text-field .field:focus {
    border: 1px solid var(--c_textField_field_borderColor__focus);
    outline: none;
  }

  .c_text-field .error {
    color: var(--c_textField_error_color);
    font-size: 1.4rem;
    font-weight: 300;
    margin: 3px 0 0;
  }
</style>
