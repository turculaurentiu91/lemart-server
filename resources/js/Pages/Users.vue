<template>
  <Layout>

    <h2 class="w3-border-bottom">Amministratori</h2>

    <div class="w3-bar w3-margin">
      <inertia-link
        v-for="n in $page.users.last_page"
        :key="n"
        :href="`/users?page=${n}`"
        class="w3-button"
        :class="{'w3-green' : $page.users.current_page === n}"
      >{{n}}</inertia-link>

      <inertia-link href="/users/create" class="w3-button w3-green w3-margin-left"><i class="fa fa-plus"></i> Aggiungi Nuovo</inertia-link>
    </div>
    <div class="w3-responsive">
        <table class="w3-table-all w3-hoverable w3-margin-top">
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Creato il</th>
                <th>Modificato il</th>
                <th>Modifica</th>
                <th>Cancella</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in $page.users.data" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.created_at}}</td>
                <td>{{user.updated_at}}</td>
                <td>
                    <inertia-link
                    :href="`/users/edit/${user.id}`"
                    class="w3-button w3-text-blue"
                    >
                    <i class="fa fa-edit w3-xlarge"></i>
                    </inertia-link>
                </td>
                <td>
                    <button
                    class="w3-button w3-text-red"
                    method="delete"
                    @click.prevent="() => setupUserForDeletion(user)"
                    >
                    <i class="fa fa-times w3-xlarge"></i>
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="w3-bar w3-margin">
      <inertia-link
        v-for="n in $page.users.last_page"
        :key="n"
        :href="`/users?page=${n}`"
        class="w3-button"
        :class="{'w3-green' : $page.users.current_page === n}"
      >{{n}}</inertia-link>
    </div>

    <ConfirmationDialog
        title="Cancellare Utente"
        v-if="userPendingDeletion"
        v-on:confirm="handleConfirmationSubmit"
    >
        Sei sicuro di voler eliminare l'utente {{userPendingDeletion.email}}? <br>
        Questa azione è irreversibile.
    </ConfirmationDialog>

  </Layout>
</template>

<script>
import Layout from '@/Shared/Layout';
import ConfirmationDialog from '@/Shared/ConfirmationDialog';

export default {
  components: {
    Layout,
    ConfirmationDialog,
  },
  computed: {
    window: () => document.window,
  },
  data: function() {
    return {
      showAddForm: false,
      userPendingDeletion: null,
    };
  },
  methods: {
    toggleAddForm: function() { this.showAddForm = !this.showAddForm; },
    setupUserForDeletion: function(user) {
        this.userPendingDeletion = { ...user };
    },
    handleConfirmationSubmit: function(confirmed) {
        if (confirmed) {
            this.$inertia.delete(`/users/${this.userPendingDeletion.id}`);
        }
        this.userPendingDeletion = null;
    }
  }
}
</script>

