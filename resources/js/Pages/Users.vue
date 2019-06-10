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
            <inertia-link
              :href="`/users/${user.id}`"
              class="w3-button w3-text-red"
              method="delete"
            >
              <i class="fa fa-times w3-xlarge"></i>
            </inertia-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="w3-bar w3-margin">
      <inertia-link 
        v-for="n in $page.users.last_page" 
        :key="n" 
        :href="`/users?page=${n}`"
        class="w3-button"
        :class="{'w3-green' : $page.users.current_page === n}"
      >{{n}}</inertia-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/Shared/Layout';

export default {
  components: {
    Layout,
  },
  computed: {
    window: () => document.window,
  },
  data: function() {
    return {
      showAddForm: false,
    };
  },
  methods: {
    toggleAddForm: function() { this.showAddForm = !this.showAddForm; }
  }
}
</script>

