<template>
  <Layout>

    <h2 class="w3-border-bottom">Richesta di intervento Express per {{$page.request.company_name}}</h2>

    <table class="w3-table" >
      <tr>
        <td>Nome dell'azienda</td>
        <td>{{$page.request.company_name}}</td>
      </tr>
      <tr>
        <td>E-mail</td>
        <td>{{$page.request.email}}</td>
      </tr>
      <tr>
        <td>Numero di cellulare</td>
        <td>{{$page.request.phone}}</td>
      </tr>
      <tr>
        <td>Indirizzo</td>
        <td>{{$page.request.address}}</td>
      </tr>
      <tr>
        <td>Indirizzo dell'intervento</td>
        <td>{{$page.request.request_address}}</td>
      </tr>
      <tr>
        <td>Persona da contattare</td>
        <td>{{$page.request.person}}</td>
      </tr>
      <tr>
        <td>Descrizione Intervento</td>
        <td>{{$page.request.description}}</td>
      </tr>
      <tr>
        <td>Mandato il</td>
        <td>{{$page.request.created_at}}</td>
      </tr>
    </table>

    <div class="row">
      <div
        class="w3-card-4 img-card w3-border w3-round"
        v-for="(img, index) in $page.images"
        :key="img.id"
        @click="() => {showModal = true; modalImg = index;}"
      >
        <img :src="`/storage/${img.filename}`" class="w3-image">
      </div>
    </div>

    <div class="w3-modal" style="display: block;" v-if="showModal">
      <div class="w3-modal-content">
        <div class="w3-container center-content">
          <span @click="() => showModal = false"
          class="w3-button w3-display-topright w3-green">&times;</span>
          <img :src="`/storage/${$page.images[modalImg].filename}`" class="w3-image w3-margin-bottom">
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
  td:first-child {
    width: 15em;
  }

  .row {
    display: flex;
    margin-top: 5%;
  }

  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-card {
    width: 100px;
  }

  .img-card img {
    width: 100%;
  }
</style>


<script>
import Layout from '@/Shared/Layout';

export default {
  components: {Layout},
  data: function() {
    return {
      showModal: false,
      modalImg: false,
    };
  },
  methods: {
    showImage: function(index) {
      this.showModal = true; this.modalImg = index;
    }
  }
}
</script>
