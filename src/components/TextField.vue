<template>
  <div class="c_text-field">
    <label v-if="label">{{ label }}</label>
    <textarea
      v-if="type === 'textArea'"
      v-model="inputVal"
      @blur="onBlur"
      @focus="onFocus"
    />
    <input
      v-else
      v-model="inputVal"
      @blur="onBlur"
      @focus="onFocus"
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
    color: #9da2a7;
    font-size: 1.4rem;
    margin: 0 0 4px;
  }

  .c_text-field input,
  .c_text-field textarea {
    background-color: #262c30;
    border: 1px solid #262c30;
    border-radius: 10px;
    color: #ccd3da;
    font-family: inherit;
    font-size: 1.4rem;
    margin: 0 0 2px;
    padding: 10px 13px;
  }

  .c_text-field textarea {
    flex-grow: 1;
  }

  .c_text-field input:focus,
  .c_text-field textarea:focus {
    border: 1px solid #424c53;
    outline: none;
  }

  .c_text-field .error {
    color: #da8f86;
    font-size: 1.4rem;
    margin: 3px 0 0;
  }
</style>
