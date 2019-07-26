<template>
    <layout>

        <h2 class="w3-border-bottom">Nuovo Preventivo Easypress</h2>

        <form style="max-width: 800px" @submit.prevent="submit">
            <div class="w3-margin-bottom">
                <label
                    class="w3-text-green"
                    v-bind:class="{'w3-text-red': $page.errors.email}"
                >
                    E-mail
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="email"
                name="email"
                v-model="formData.email"
                v-bind:class="{ 'w3-border-red': $page.errors.email}"
            >
                <div v-if="$page.errors.email">
                    <p
                        v-for="(error, index) in $page.errors.email"
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
                    v-bind:class="{'w3-text-red': $page.errors.appartament_count}"
                >
                    Nr. Appartamenti
                </label>
            <input
                class="w3-input w3-border w3-round"
                type="number"
                name="appartament_count"
                v-model="formData.appartament_count"
                v-bind:class="{ 'w3-border-red': $page.errors.appartament_count}"
            >
                <div v-if="$page.errors.appartament_count">
                    <p
                        v-for="(error, index) in $page.errors.appartament_count"
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
                >
                    Note
                </label>
                <textarea
                    class="w3-input w3-border w3-round"
                    name="note"
                    v-model="formData.note"
                >
                </textarea>
            </div>

            <input
                type="submit"
                value="Crea Nuovo Preventivo"
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
    Layout,
  },
  data: function() {
    return {
        formData: {
            email: '',
            appartament_count: '',
            note: '',
        },
        loading: false,
    };
  },
  methods: {
    submit: function() {
        this.loading = true;
        this.$inertia.post('/easypress', this.formData, {preseveState: true})
            .then(() => this.loading = false);
    }
  }
}
</script>

