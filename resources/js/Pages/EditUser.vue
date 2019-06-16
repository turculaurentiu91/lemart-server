<template>
  <Layout>
    <form style="max-width: 800px" @submit.prevent="submit">
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
          v-bind:class="{'w3-text-red': $page.errors.name}"
        >Nome</label>
        <input 
          class="w3-input w3-border w3-round" 
          type="text" 
          name="name"
          v-model="name"
          v-bind:class="{ 'w3-border-red': $page.errors.name}"
          minlength="2"
        >
        <div v-if="$page.errors.name">
            <p 
              v-for="(error, index) in $page.errors.name" 
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
          class="w3-input w3-border w3-round" 
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

      <div class="w3-margin-bottom">
        <label 
          class="w3-text-green"
          v-bind:class="{'w3-text-red': $page.errors.repeatPassword}"
        >Ripeti la Password</label>
        <input 
          class="w3-input w3-border w3-round" 
          type="password" 
          name="repeatPassword"
          v-model="repeatPassword"
          v-bind:class="{ 'w3-border-red': $page.errors.repeatPassword}"
        >
        <div v-if="$page.errors.repeatPassword">
            <p 
              v-for="(error, index) in $page.errors.repeatPassword" 
              :key="index"
              class="w3-tiny w3-text-red"
            ><i>*{{error}}</i></p>
          </div>
      </div>

      <input
       type="submit" 
       value="Modifica Amministratore"
       class="w3-button w3-green w3-bar w3-round"
       :class="{'w3-disabled': loading}"
      >
        
    </form>
  </Layout>
</template>

<script>
import Layout from '@/Shared/Layout';

export default {
  components: {
    Layout,
  },
  data: function() {
    return {
      email: this.$page.userToEdit.email,
      name: this.$page.userToEdit.name,
      password: '',
      repeatPassword: '',
      loading: false,
    };
  },
  methods: {
    submit: function() {
      const data = {
        email: this.email,
        name: this.name,
        password: this.password,
        repeatPassword: this.repeatPassword,
      };

      this.loading = true;
      this.$inertia.put(`/users/${this.$page.userToEdit.id}`, data, {preseveState: true})
        .then(() => {
          this.loading = false;
        });
    }
  }
}
</script>
