<template>
  <div class="c_text-field">
    <label v-if="label">{{ label }}</label>
    <textarea v-if="type === 'textArea'" v-model="inputVal" />
    <input v-else v-model="inputVal" @blur="$emit('blur')" :type="type" />
    <span v-if="error" class="error">
      {{ error }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'TextField',
    props: {
      error: String,
      label: String,
      type: {
        default: 'text',
        type: String,
      },
      value: {
        default: '',
        type: String,
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
