<template>
    <div class="w3-bar w3-border">
        <inertia-link
            href="/easypress"
            class="w3-bar-item w3-button w3-mobile"
            :class="{'w3-gray' : path==='/easypress'}"
        >
            Preventivi
        </inertia-link>

        <inertia-link
            href="easypress-price-rules"
            class="w3-bar-item w3-button w3-mobile"
            :calss="{'w3-gray' : path==='/easypress-price-rules'}"
        >
            Regole Dei Prezzi
        </inertia-link>
    </div>
</template>

<script>
export default {
    computed: {
        path: function() { return window.location.pathname; },
    }
}
</script>

<style lang="sass" scoped>
    .w3-button
        width: 50%
</style>


