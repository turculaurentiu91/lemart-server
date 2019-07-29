<template>
    <layout>
        <easypress-nav />
        <h2 class="w3-border-bottom">Regole dei prezzi Easypress</h2>

        <div v-if="$page.easypressPriceRules.data.length > 0">
            <div class="w3-bar w3-margin">
            <inertia-link
                v-for="n in $page.easypressPriceRules.last_page"
                :key="n"
                :href="`/easypress-price-rules?page=${n}`"
                class="w3-button"
                :class="{'w3-green' : $page.easypressPriceRules.current_page === n}"
            >{{n}}</inertia-link>

            <inertia-link href="/easypress-price-rules/create" class="w3-button w3-green w3-margin-left"><i class="fa fa-plus"></i> Aggiungi Nuovo</inertia-link>
            </div>

            <div class="w3-responsive">
                <table class="w3-table-all w3-hoverable w3-margin-top">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Da</th>
                            <th>A</th>
                            <th>Prezzo Easypress</th>
                            <th>Prezzo Easypress 2</th>
                            <th>Prezzo Easypress+</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="rule in $page.easypressPriceRules.data"
                            :key="rule.id"
                            class="pointer-cursor"
                        >
                            <td>{{rule.id}}</td>
                            <td>{{rule.from}}</td>
                            <td>{{rule.to}}</td>
                            <td>{{Number(rule.price_one).toFixed(2)}} &euro;</td>
                            <td>{{Number(rule.price_two).toFixed(2)}} &euro;</td>
                            <td>{{Number(rule.price_plus).toFixed(2)}} &euro;</td>
                            <td>
                                <inertia-link
                                    :href="`/easypress-price-rules/${rule.id}`"
                                    class="w3-button w3-text-blue"
                                >
                                    <i class="fa fa-eye w3-xlarge"></i>
                                </inertia-link>
                            </td>

                            <td>
                                <inertia-link
                                    :href="`/easypress-price-rules/${rule.id}/edit`"
                                    class="w3-button w3-text-green"

                                >
                                    <i class="fa fa-edit w3-xlarge"></i>
                                </inertia-link>
                            </td>

                            <td>
                                <button
                                    class="w3-button w3-text-red"
                                    @click.prevent="() => setupRuleForDeletion(rule)"
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
                    v-for="n in $page.easypressPriceRules.last_page"
                    :key="n"
                    :href="`/easypress-price-rules?page=${n}`"
                    class="w3-button"
                    :class="{'w3-green' : $page.easypressPriceRules.current_page === n}"
                >{{n}}</inertia-link>
            </div>

            <confirmation-dialog
                title="Cancellare Preventivo Easypress"
                v-if="rulePendingDeletion"
                v-on:confirm="handleConfirmationSubmit"
            >
                Sei sicuro di voler eliminare questa regola? <br>
                Da {{rulePendingDeletion.from}} a {{rulePendingDeletion.to}}:
                {{rulePendingDeletion.price}} &euro; / Messe / Appartamento <br>
                Questa azione è irreversibile.
            </confirmation-dialog>

        </div>
        <div v-else>
            <h3>Nessun preventivo trovato.</h3>
            <inertia-link
                href="/easypress-price-rules/create"
                class="w3-button w3-green w3-margin-left"
            >
                <i class="fa fa-plus"></i> Aggiungi Nuovo
            </inertia-link>

        </div>


    </layout>
</template>

<script>
import Layout from '@/Shared/Layout';
import ConfirmationDialog from '@/Shared/ConfirmationDialog';
import EasypressNav from '@/Shared/EasypressNav';

export default {
    components: {
        'layout' : Layout,
        'confirmation-dialog': ConfirmationDialog,
        'easypress-nav': EasypressNav,
    },
    methods: {
        setupRuleForDeletion: function(rule) {
            this.rulePendingDeletion = { ...rule };
        },
        handleConfirmationSubmit: function(confirmed) {
            if (confirmed) {
                this.$inertia
                .delete(`/easypress-price-rules/${this.rulePendingDeletion.id}`);
            }
            this.rulePendingDeletion = null;
        }
    },
    data: function() {
        return {
            rulePendingDeletion: null,
        };
    }
}
</script>
