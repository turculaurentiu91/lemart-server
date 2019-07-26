<template>
    <layout>

        <h2 class="w3-border-bottom">
            Regola dei prezzi {{$page.easypressPriceRule.id}}
        </h2>

        <single-view-table v-bind:struct="tableStruct" />
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
                'ID': this.pr.id,
                'Da': this.pr.from,
                'A': this.pr.to,
                'Prezzo Easypress 1': this.pr.price_one,
                'Prezzo Easypress 2': this.pr.price_two,
                'Prezzo Easypress +': this.pr.price_plus,
            };
        },

        pr: function() { return this.$page.easypressPriceRule; },
    },
}
</script>
