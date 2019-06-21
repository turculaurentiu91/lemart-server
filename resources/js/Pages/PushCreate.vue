<template>
  <Layout>
    <h2 class="w3-border-bottom">Mandare Notifiche Push</h2>

    <form style="max-width: 800px" @submit.prevent="submit">

      <div class="w3-margin-bottom">
        <label 
          class="w3-text-green"
          v-bind:class="{'w3-text-red': $page.errors.title}"
        >Titolo</label>
        <input 
          class="w3-input w3-border w3-round" 
          type="text" 
          name="title"
          v-model="title"
          v-bind:class="{ 'w3-border-red': $page.errors.title}"
        >
        <div v-if="$page.errors.title">
            <p 
              v-for="(error, index) in $page.errors.title" 
              :key="index"
              class="w3-tiny w3-text-red"
            ><i>*{{error}}</i></p>
          </div>
      </div>

      <!-- <div class="w3-margin-bottom">
        <label 
          class="w3-text-green"
          v-bind:class="{'w3-text-red': $page.errors.link}"
        >Link</label>
        <input 
          class="w3-input w3-border w3-round" 
          type="url" 
          name="link"
          v-model="link"
          v-bind:class="{ 'w3-border-red': $page.errors.link}"
        >
        <div v-if="$page.errors.link">
            <p 
              v-for="(error, index) in $page.errors.link" 
              :key="index"
              class="w3-tiny w3-text-red"
            ><i>*{{error}}</i></p>
          </div>
      </div> -->

      <div class="w3-margin-bottom">
        <label 
          class="w3-text-green"
          v-bind:class="{'w3-text-red': $page.errors.body}"
        >Messaggio</label>
        <textarea 
          class="w3-input w3-border w3-round"  
          name="body"
          v-model="body"
          v-bind:class="{ 'w3-border-red': $page.errors.body}"
        ></textarea>
        <div v-if="$page.errors.body">
            <p 
              v-for="(error, index) in $page.errors.body" 
              :key="index"
              class="w3-tiny w3-text-red"
            ><i>*{{error}}</i></p>
          </div>
      </div>

       <input
       type="submit" 
       :value="loading ? 'Mandando...' : 'Manda Notifica'"
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
        title: '',
        body: '',
        link: '',
        loading: false,
      };
    },

    methods: {
      submit: function() {
        this.loading = true;
        this.$inertia.post('/push-notifications', {
          title: this.title,
          body: this.body,
          link: this.link,
        }).then(() => this.loading = false);
      },
    },
  };
</script>