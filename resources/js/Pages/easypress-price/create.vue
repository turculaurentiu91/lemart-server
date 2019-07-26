<template>
    <layout>
        <h2 class="w3-border-bottom">Crea Nuova Regola Dei Prezzi</h2>

        <form @submit.prevent="submit">
            <div class="w3-margin-bottom">
                <label
                    class="w3-text-green"
                    v-bind:class="{'w3-text-red': $page.errors.from}"
                >
                    Partendo Da
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="number"
                name="from"
                v-model="formData.from"
                v-bind:class="{ 'w3-border-red': $page.errors.from}"
                min="1"
            >
                <p class="w3-tiny w33-text-gray">
                    <i>
                        *Cominciando da <b>n</b> appartamenti
                    </i>
                </p>
                <div v-if="$page.errors.from">
                    <p
                        v-for="(error, index) in $page.errors.from"
                        :key="index"
                        class="w3-tiny w3-text-red"
                    >
                        <i>*{{error}}</i>
                    </p>
                </div>
            </div>

            <div class="w3-margin-bottom">
                <label
                    class="w3-text-green"
                    v-bind:class="{'w3-text-red': $page.errors.to}"
                >
                    A
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="number"
                name="to"
                v-model="formData.to"
                v-bind:class="{ 'w3-border-red': $page.errors.to}"
                min="2"
            >
                <p class="w3-tiny w33-text-gray">
                    <i>
                        *Finendo a <b>n</b> appartamenti
                    </i>
                </p>
                <p class="w3-tiny w33-text-gray">
                    <i>
                        *Il server non supporta numeri infiniti, se la regola va a un numero infinito di appartamenti, inserire un numero grande, tipo 100,000
                    </i>
                </p>
                <div v-if="$page.errors.to">
                    <p
                        v-for="(error, index) in $page.errors.to"
                        :key="index"
                        class="w3-tiny w3-text-red"
                    >
                        <i>*{{error}}</i>
                    </p>
                </div>
            </div>

            <div class="w3-margin-bottom">
                <label
                    class="w3-text-green"
                    v-bind:class="{'w3-text-red': $page.errors.price_one}"
                >
                    Prezzo &euro; / appartamento / 1 Visita
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="number"
                step="0.01"
                min="0.01"
                name="price"
                v-model="formData.price_one"
                v-bind:class="{ 'w3-border-red': $page.errors.price_one}"
            >
                <div v-if="$page.errors.price_one">
                    <p
                        v-for="(error, index) in $page.errors.price_one"
                        :key="index"
                        class="w3-tiny w3-text-red"
                    >
                        <i>*{{error}}</i>
                    </p>
                </div>
            </div>

            <div class="w3-margin-bottom">
                <label
                    class="w3-text-green"
                    v-bind:class="{'w3-text-red': $page.errors.price_two}"
                >
                    Prezzo &euro; / appartamento / 2 Visite
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="number"
                step="0.01"
                min="0.01"
                name="price"
                v-model="formData.price_two"
                v-bind:class="{ 'w3-border-red': $page.errors.price_two}"
            >
                <div v-if="$page.errors.price_two">
                    <p
                        v-for="(error, index) in $page.errors.price_two"
                        :key="index"
                        class="w3-tiny w3-text-red"
                    >
                        <i>*{{error}}</i>
                    </p>
                </div>
            </div>

            <div class="w3-margin-bottom">
                <label
                    class="w3-text-green"
                    v-bind:class="{'w3-text-red': $page.errors.price_plus}"
                >
                    Prezzo &euro; / appartamento / 2 Visite +
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="number"
                step="0.01"
                min="0.01"
                name="price"
                v-model="formData.price_plus"
                v-bind:class="{ 'w3-border-red': $page.errors.price_plus}"
            >
                <div v-if="$page.errors.price_plus">
                    <p
                        v-for="(error, index) in $page.errors.price_plus"
                        :key="index"
                        class="w3-tiny w3-text-red"
                    >
                        <i>*{{error}}</i>
                    </p>
                </div>
            </div>

            <input
                type="submit"
                :value="submitValue"
                class="w3-button w3-green w3-bar w3-round"
                :class="{'w3-disabled': loading}"
            >
        </form>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout';

export default {
    components: {
        'layout': Layout,
    },

    computed: {
        submitValue: function() {
            return this.$page.easypressPriceRule ?
                'Modifica Regola' :
                'Aggiungi Nuova Regola'
        }
    },

    data: function() {
        return {
            formData: {
                from: this.$page.easypressPriceRule ?
                        this.$page.easypressPriceRule.from : 0,
                to: this.$page.easypressPriceRule ?
                        this.$page.easypressPriceRule.to : 0,
                price_one: this.$page.easypressPriceRule ?
                        this.$page.easypressPriceRule.price_one : 0,
                price_two: this.$page.easypressPriceRule ?
                        this.$page.easypressPriceRule.price_two : 0,
                price_plus: this.$page.easypressPriceRule ?
                        this.$page.easypressPriceRule.price_plus : 0,
            },
            loading: false,
        };
    },

    methods: {
        submit: function() {
            const url = this.$page.easypressPriceRule
                ? `/easypress-price-rules/${this.$page.easypressPriceRule.id}`
                : '/easypress-price-rules'

            const method = this.$page.easypressPriceRule ? 'PUT' : 'POST';

            this.loading = true;
            this.$inertia.visit(
                url,
                {
                    method,
                    data : this.formData,
                    preseveState: true
                }
            ).then(() => this.loading = false);
        }
    }
}
</script>

<style scoped>
    form {
        max-width: 800px;
        margin-left: 20px;
    }
</style>

