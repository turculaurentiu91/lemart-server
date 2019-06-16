<template>
  <div class="w3-display-container w3-light-gray login-form">
    <div class="w3-display-middle w3-card-4 w3-border login-form--card w3-white">
      <div class="w3-container w3-green w3-margin-bottom">
        <h2>Login</h2>
      </div>
      <form action="/login" method="POST" class="w3-container" @submit.prevent="submit">
        <div class="w3-margin-bottom">
          <label 
            class="w3-text-green"
            v-bind:class="{'w3-text-red': $page.errors.email}"
          >E-mail</label>
          <input 
            class="w3-input w3-border w3-round" 
            type="email" 
            name="email"
            v-model="email"
            v-bind:class="{ 'w3-border-red': $page.errors.email}"
          >
          <div v-if="$page.errors.email">
            <p 
              v-for="(error, index) in $page.errors.email" 
              :key="index"
              class="w3-tiny w3-text-red"
            ><i>*{{error}}</i></p>
          </div>
        </div>

        <div class="w3-margin-bottom">
          <label 
            class="w3-text-green"
            v-bind:class="{'w3-text-red': $page.errors.password}"
          >Password</label>
          <input 
            class="w3-input w3-border w3-round w3-margin-bottom" 
            type="password" 
            name="password"
            v-model="password"
            v-bind:class="{ 'w3-border-red': $page.errors.password}"
          >
          <div v-if="$page.errors.password">
            <p 
              v-for="(error, index) in $page.errors.password" 
              :key="index"
              class="w3-tiny w3-text-red"
            ><i>*{{error}}</i></p>
          </div>
        </div>

        <input type="submit" value="Login" class="w3-button w3-bar w3-green w3-margin-top w3-margin-bottom">
      </form>
    </div>
  </div>
</template>

<style>
  .login-form {
    width: 100vw;
    height: 100vh;
  }

  .login-form--card {
    width: 45vw;
    min-height: 300px;
  }

  @media screen and (max-width: 1024px) {
    .login-form--card {
      width: 60vw;
    }
  }

   @media screen and (max-width: 768px) {
    .login-form--card {
      width: 80vw;
    }
  }

   @media screen and (min-width: 1200px) {
    .login-form--card {
      width: 30vw;
    }
  }
</style>

<script>

export default {
  data: function() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    submit: function() {
      this.$inertia.post('/login', {
        email: this.email,
        password: this.password,
        remember: true,
      }).then();
    }
  },
}
</script>

