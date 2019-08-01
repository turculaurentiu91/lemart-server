<template>
  <layout>

    <h2 class="w3-border-bottom">Richesta di intervento Express per {{$page.request.company_name}}</h2>

    <single-view-table v-bind:struct="tableStruct" />

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
  </layout>
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
import SingleViewTable from '@/Shared/SingleViewTable';

export default {
    components: {
        'layout': Layout,
        'single-view-table': SingleViewTable,
    },
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
  },
    computed: {
      req: function() { return this.$page.request; },
       tableStruct: function() {
           return {
                'ID': this.req.id,
                'Nome dell\'azienda': this.req.company_name,
                'E-mail': this.req.email,
                'Numero di cellulare': this.req.phone,
                'Indirizzo': this.req.address,
                'Marca, Modello e Tipo': this.req.model,
                'Indirizzo dell\'intervento': this.req.request_address,
                'Persona da contattare': this.req.person,
                'Descrizione Intervento': this.req.description,
                'Mandato il': this.req.created_at,
           }
      },
  },
}
</script>
