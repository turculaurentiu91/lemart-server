<template>
  <Layout>
    <h2 class="w3-border-bottom">Acasa</h2>

    <div class="w3-row-padding">
        <div class="w3-col l6 m12">
            <div class="w3-card-2 w3-display-container home-card">
                <h3 class="w3-light-gray w3-padding">Nuove Richeste:
                    <b v-if="$page.user.unreadStandardRequests.length > 0">
                        {{$page.user.unreadStandardRequests.length}}
                    </b>
                </h3>
                <div class="w3-responsive">
                    <table class="w3-table w3-bordered w3-hoverable" v-if="$page.user.unreadStandardRequests.length > 0">
                        <tr>
                            <th>ID</th>
                            <th>Azienda</th>
                            <th>Email</th>
                            <th>Data</th>
                        </tr>
                        <tr
                            v-for="req in $page.user.unreadStandardRequests.slice(0, 5)"
                            :key="req.id"
                            @click.prevent="$inertia.visit(`/standard-requests/${req.id}`)"
                            style="cursor: pointer;"
                            class="w3-hover-light-gray"
                        >
                            <td>{{req.id}}</td>
                            <td>{{req.company_name}}</td>
                            <td>{{req.email}}</td>
                            <td>{{req.created_at}}</td>
                        </tr>
                    </table>
                </div>
                <div class="w3-panel" v-if="$page.user.unreadStandardRequests.length > 0">
                    <inertia-link href="/standard-requests">Vedi Tutto</inertia-link>
                </div>

                <h4
                    v-if="$page.user.unreadStandardRequests.length == 0"
                    class="w3-display-middle"
                >Non ci suono nuove richieste</h4>
            </div>
        </div>
        <div class="w3-col l6 m12">
            <div class="w3-card-2 w3-display-container home-card">
                <h3 class="w3-light-gray w3-padding">Nuove Richeste Express:
                    <b v-if="$page.user.unreadExpressRequests.length > 0">
                        {{$page.user.unreadExpressRequests.length}}
                    </b>
                </h3>
                <div class="w3-responsive">
                    <table class="w3-table w3-bordered w3-hoverable" v-if="$page.user.unreadExpressRequests.length > 0">
                        <tr>
                            <th>ID</th>
                            <th>Azienda</th>
                            <th>Email</th>
                            <th>Data</th>
                        </tr>
                        <tr
                            v-for="req in $page.user.unreadExpressRequests.slice(0, 5)"
                            :key="req.id"
                            @click.prevent="$inertia.visit(`/express-requests/${req.id}`)"
                            style="cursor: pointer;"
                            class="w3-hover-light-gray"
                        >
                            <td>{{req.id}}</td>
                            <td>{{req.company_name}}</td>
                            <td>{{req.email}}</td>
                            <td>{{req.created_at}}</td>
                        </tr>
                    </table>
                </div>

                <div class="w3-panel" v-if="$page.user.unreadExpressRequests.length > 0">
                    <inertia-link href="/express-requests">Vedi Tutto</inertia-link>
                </div>

                <h4
                    v-if="$page.user.unreadExpressRequests.length == 0"
                    class="w3-display-middle"
                >Non ci suono nuove richieste express</h4>
            </div>
        </div>
    </div>

    <div class="w3-row-padding">
        <div class="w3-col l6 m12">
            <div class="w3-card-2 w3-display-container home-card">
                <h3 class="w3-light-gray w3-padding">
                    Manda Notifiche Push
                </h3>

                <div class="w3-panel">
                    <PushNotificationForm />
                </div>
            </div>
        </div>
    </div>
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
}
</script>

<style>
    .home-card {
        min-height: 350px;
    }
</style>

