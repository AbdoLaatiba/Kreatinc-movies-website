<template>
    <div>
      <h1>Authentication</h1>
      <div>
        <h2>Sign In</h2>
        <form @submit.prevent="signIn" class="auth-form">
          <label>
            Email:
            <input type="email" v-model="signInEmail" />
          </label>
          <label>
            Password:
            <input type="password" v-model="signInPassword" />
          </label>
          <button type="submit">Sign In</button>
        </form>
  
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp" class="auth-form">
          <label>
            Email:
            <input type="email" v-model="signUpEmail" />
          </label>
          <label>
            Password:
            <input type="password" v-model="signUpPassword" />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <!-- <div v-if="isLoggedIn">
        <h2>Welcome, {{ user.email }}</h2>
        <button @click="signOut">Sign Out</button>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('user')),
        isLoggedIn: JSON.parse(localStorage.getItem('loggedIn')),
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
      }
    },
    methods: {
      // Sign in the user with the provided email and password
      signIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
          alert('create an account before attempting to log in');
        }else {
        if (this.signInEmail == user.email && this.signInPassword == user.password) {
            localStorage.setItem('loggedIn', true);
            this.isLoggedIn = true;
            location.href = '/';
        }else{
            alert('email or password is inncorrect');
        }
      }
      },
      // Sign up a new user with the provided email and password
      signUp() {
        if (this.signUpEmail != '' && this.signUpPassword != '') {
            localStorage.setItem('user', JSON.stringify({
                email: this.signUpEmail,
                password: this.signUpPassword,
                watchList: []
            }));

            localStorage.setItem('loggedIn', true);
            this.isLoggedIn = true;

            this.signUpEmail = '';
            this.signUpPassword = '';

            location.href = '/';
        }else{
            alert('Fill the form please !!');
        }
      },
      // Sign out the current user
      signOut() {
        localStorage.setItem('loggedIn', false);
        this.isLoggedIn = false;
      },
    },
  }
  </script>

<style scoped>
  /* Add styles for the authentication component here */
  .auth-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }
  .auth-form label {
    margin-bottom: 0.5em;
  }
  .auth-form input {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .auth-form button[type="submit"] {
    padding: 0.5em 1em;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
</style>
