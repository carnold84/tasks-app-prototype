<template>
  <div class="sign-in-view">
    <div v-if="isLoading" class="container">
      <message-screen>Signing in...</message-screen>
    </div>
    <div v-else class="container">
      <c-typography class="title" component="h2" variant="h2">
        Sign In
      </c-typography>
      <ul v-if="errors.length > 0">
        <li v-for="error of errors" :key="error">{{ error }}</li>
      </ul>
      <form @submit.prevent="onSubmit" class="form">
        <text-field v-model="email" class="field" type="text" />
        <text-field v-model="password" class="field" type="password" />
        <icon-button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z"
            />
          </svg>
        </icon-button>
      </form>
    </div>
  </div>
</template>

<script>
  import CTypography from '../components/CTypography.vue';
  import IconButton from '../components/IconButton.vue';
  import MessageScreen from '../components/MessageScreen.vue';
  import TextField from '../components/TextField.vue';

  export default {
    name: 'SignInView',
    components: {
      TextField,
      IconButton,
      CTypography,
      MessageScreen,
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

          console.log(response);

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
    background-color: var(--neutral1);
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .container {
    align-items: flex-end;
    background-color: var(--neutral2);
    border: 1px solid var(--neutral4);
    display: flex;
    flex-direction: column;
    margin: 0 20px;
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

  .field {
    margin: 0 0 15px;
    width: 100%;
  }
</style>
