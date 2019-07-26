<template>
    <layout>

        <h2 class="w3-border-bottom">
            Preventivo Easypress per {{$page.easypressRequest.email}}
        </h2>

        <single-view-table
            v-bind:struct="tableStruct"
            v-bind:html-fields="['Note']"
        />

        <div class="w3-container w3-margin-top">
            <a :href="`/easypress/${$page.easypressRequest.id}/document`" class="w3-button w3-green">
                <i class="fa fa-file"></i> Preventivo PDF
            </a>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout';
import SingleViewTable from '@/Shared/SingleViewTable';

export default {
    components: {
        'layout' : Layout,
        'single-view-table': SingleViewTable,
    },

    computed: {
        tableStruct: function() {
            return {
                'ID': this.req.id,
                'E-mail': this.req.email,
                'Nr. Appartamenti': this.req.appartament_count,
                'Note': this.req.formatted_note,
                'Prezzo Easypress 1': this.req.price_one,
                'Prezzo Easypress 2': this.req.price_two,
                'Prezzo Easypress +': this.req.price_plus
            };
        },

        req: function() {return this.$page.easypressRequest},
    }
}
</script>

<style scoped>
    td:first-child {
        width: 15em;
    }
</style>
