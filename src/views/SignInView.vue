<template>
  <div class="sign-in-view">
    <div v-if="isLoading" class="container">
      <message-screen>Signing in...</message-screen>
    </div>
    <div v-else class="container">
      <c-typography class="title" component="h2" variant="h2">
        Sign In
      </c-typography>
      <ul v-if="errors.length > 0" class="errors">
        <li v-for="error of errors" class="error-item" :key="error">
          {{ error }}
        </li>
      </ul>
      <form @submit.prevent="onSubmit" class="form">
        <text-field v-model="email" class="field" id="email" type="text" />
        <text-field
          v-model="password"
          class="field"
          id="password"
          type="password"
        />
        <c-button>
          Sign In
        </c-button>
      </form>
    </div>
  </div>
</template>

<script>
  import CButton from '../components/CButton.vue';
  import CTypography from '../components/CTypography.vue';
  import MessageScreen from '../components/MessageScreen.vue';
  import TextField from '../components/TextField.vue';

  export default {
    name: 'SignInView',
    components: {
      TextField,
      CTypography,
      MessageScreen,
      CButton,
    },
    data() {
      return {
        email: 'demo@user.com',
        errors: [],
        isLoading: false,
        password: 'password',
      };
    },
    methods: {
      async onSubmit() {
        this.errors = [];

        if (this.email === '') {
          this.errors.push('Please provide a valid email.');
        }

        if (this.password === '') {
          this.errors.push('Please provide a password.');
        }

        if (this.email && this.password) {
          this.isLoading = true;

          const response = await this.$store.dispatch('auth/signIn', {
            email: this.email,
            password: this.password,
          });

          if (response.error) {
            this.isLoading = false;
            this.errors.push('Email or password is incorrect.');
          } else {
            this.$router.push('/');
          }
        }
      },
    },
  };
</script>

<style scoped>
  .sign-in-view {
    align-items: center;
    background-color: var(--v_signIn_bgColor);
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .container {
    align-items: flex-end;
    background-color: var(--v_signIn_content_bgColor);
    border: 1px solid var(--v_signIn_content_borderColor);
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    max-width: 400px;
    min-height: 220px;
    padding: 20px;
    position: relative;
    width: 100%;
  }

  .title {
    margin: 0 0 15px;
    width: 100%;
  }

  .form {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .errors {
    background-color: var(--v_signIn_errors_bgColor);
    border-radius: 3px;
    display: flex;
    list-style: none;
    margin: 0 0 20px;
    padding: 8px 12px;
    width: 100%;
  }

  .error-item {
    color: var(--v_signIn_errors_item_color);
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }

  .field {
    margin: 0 0 20px;
    width: 100%;
  }
</style>
