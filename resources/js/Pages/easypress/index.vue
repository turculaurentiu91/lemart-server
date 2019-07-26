<template>
    <layout>

        <h2 class="w3-border-bottom">Preventivi Easypress</h2>

        <div v-if="$page.easypressRequests.data.length > 0">
            <div class="w3-bar w3-margin">
            <inertia-link
                v-for="n in $page.easypressRequests.last_page"
                :key="n"
                :href="`/easypress?page=${n}`"
                class="w3-button"
                :class="{'w3-green' : $page.easypressRequests.current_page === n}"
            >{{n}}</inertia-link>

            <inertia-link href="/easypress/create" class="w3-button w3-green w3-margin-left"><i class="fa fa-plus"></i> Aggiungi Nuovo</inertia-link>
            </div>

            <div class="w3-responsive">
                <table class="w3-table-all w3-hoverable w3-margin-top">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Nr. Appartamenti</th>
                            <th>Creato il</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="req in $page.easypressRequests.data"
                            :key="req.id"
                            class="pointer-cursor"
                            :class="{'bold' : $page.user.unreadEasypressRequests.find(r => r.id === req.id)}"
                        >
                            <td>{{req.formatted_id}}</td>
                            <td>{{req.email}}</td>
                            <td>{{req.appartament_count}}</td>
                            <td>{{req.created_at}}</td>
                            <td>
                                <inertia-link
                                    :href="`/easypress/${req.id}`"
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
            </div>

            <div class="w3-bar w3-margin">
                <inertia-link
                    v-for="n in $page.easypressRequests.last_page"
                    :key="n"
                    :href="`/easypress?page=${n}`"
                    class="w3-button"
                    :class="{'w3-green' : $page.easypressRequests.current_page === n}"
                >{{n}}</inertia-link>
            </div>

            <confirmation-dialog
                title="Cancellare Preventivo Easypress"
                v-if="requestPendingDeletion"
                v-on:confirm="handleConfirmationSubmit"
            >
                Sei sicuro di voler eliminare preventivo per
                {{requestPendingDeletion.email}}? <br>
                Questa azione è irreversibile.
            </confirmation-dialog>

        </div>
        <div v-else>
            <h3>Nessun preventivo trovato.</h3>
            <inertia-link
                href="/easypress/create"
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

export default {
    components: {
        'layout' : Layout,
        'confirmation-dialog': ConfirmationDialog,
    },
    methods: {
        setupRequestForDeletion: function(req) {
            this.requestPendingDeletion = { ...req };
        },
        handleConfirmationSubmit: function(confirmed) {
            if (confirmed) {
                this.$inertia
                .delete(`/easypress/${this.requestPendingDeletion.id}`);
            }
            this.requestPendingDeletion = null;
        }
    },
    data: function() {
        return {
            requestPendingDeletion: null,
        };
    }
}
</script>
