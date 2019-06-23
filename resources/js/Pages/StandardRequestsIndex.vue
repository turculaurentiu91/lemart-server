<template>
  <Layout>
    <h2 class="w3-border-bottom">Richeste di intervento Standard</h2>

    <h3 v-if="$page.requests.data.length <= 0">Nessuna Richiesta Trovata</h3>
    <div class="w3-bar w3-margin" v-if="$page.requests.data.length > 0">
      <inertia-link
        v-for="n in $page.requests.last_page"
        :key="n"
        :href="`/standard-requests?page=${n}`"
        class="w3-button"
        :class="{'w3-green' : $page.requests.current_page === n}"
      >{{n}}</inertia-link>
    </div>

    <table
      v-if="$page.requests.data.length > 0"
      class="w3-table-all w3-hoverable w3-margin-top"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Nr. tel</th>
          <th>Tipologia Intervento</th>
          <th>Persona di Rferimento</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="req in $page.requests.data"
          v-bind:key="req.id"
          class="pointer-cursor"
          :class="{'bold' : $page.user.unreadStandardRequests.find(r => r.id === req.id)}"
        >
          <td>{{req.id}}</td>
          <td>{{req.company_name}}</td>
          <td>{{req.email}}</td>
          <td>{{req.phone}}</td>
          <td>{{req.type}}</td>
          <td>{{req.person}}</td>
          <td>
            <inertia-link
              :href="`/standard-requests/${req.id}`"
              class="w3-button w3-text-blue"
            >
              <i class="fa fa-eye w3-xlarge"></i>
            </inertia-link>
          </td>
          <td>
            <button
              class="w3-button w3-text-red"
              @click.prevent="() => setupRequestForDeletion(req)"
            >
              <i class="fa fa-times w3-xlarge"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="w3-bar w3-margin" v-if="$page.requests.data.length > 0">
      <inertia-link
        v-for="n in $page.requests.last_page"
        :key="n"
        :href="`/standard-requests?page=${n}`"
        class="w3-button"
        :class="{'w3-green' : $page.requests.current_page === n}"
      >{{n}}</inertia-link>
    </div>


    <ConfirmationDialog
        title="Cancellare Richiesta"
        v-if="requestPendingDeletion"
        v-on:confirm="handleConfirmationSubmit"
    >
        Sei sicuro di voler eliminare la richiesta da
        {{requestPendingDeletion.company_name}}? <br>
        Questa azione è irreversibile.
    </ConfirmationDialog>
  </Layout>
</template>

<style>
  .pointer-cursor {
    cursor: pointer;
  }
</style>


<script>
import Layout from '@/Shared/Layout';
import ConfirmationDialog from '@/Shared/ConfirmationDialog';

export default {
  components: {Layout, ConfirmationDialog},
  data: function() {
      return {
          requestPendingDeletion: null,
      };
  },
  methods: {
    setupRequestForDeletion: function(req) {
        this.requestPendingDeletion = { ...req };
    },
    handleConfirmationSubmit: function(confirmed) {
        if (confirmed) {
            this.$inertia
            .delete(`/standard-requests/${this.requestPendingDeletion.id}`);
        }
        this.requestPendingDeletion = null;
    }
  }
}
</script>
