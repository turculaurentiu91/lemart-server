<template>
  <Layout>
    <h2 class="w3-border-bottom">Mandare Notifiche Push</h2>

    <PushNotificationForm />
  </Layout>
</template>

<script>
  import Layout from '@/Shared/Layout';
  import PushNotificationForm from '@/Shared/PushNotificationForm';

  export default {
    components: {
      Layout,
      PushNotificationForm,
    },
    data: function() {
      return {
        title: '',
        body: '',
        link: '',
        loading: false,
        pendingConfirmation: false,
      };
    },

    methods: {
      submit: function() {
        this.loading = true;
        this.$inertia.post('/push-notifications', {
          title: this.title,
          body: this.body,
        }).then(() => {
            this.loading = false;
            this.title = "";
            this.body = "";
        });
      },

      handleConfirmation: function(confirmed) {
          if (confirmed) {
              this.submit();
          }

          this.pendingConfirmation = false;
      }
    },
  };
</script>
