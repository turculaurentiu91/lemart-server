<template>
    <table class="w3-table">
        <tbody>
            <tr v-for="(value, name) in struct" :key="name">
                <td>{{name}}</td>
                <td
                    v-if="htmlFields.indexOf(name) !== -1"
                    v-html="value"
                ></td>
                <td v-else>{{value}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        'struct': {
            type: Object,
            required: true,
        },
        'htmlFields': {
            type: Array,
            default: () => [],
        }
    },
}
</script>

<style scoped>
    td:first-child {
        width: 15em;
    }
</style>
