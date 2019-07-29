<template>
    <div class="w3-modal" style="display: block">
  <div class="w3-modal-content w3-animate-opacity">
    <div>
      <span @click="$emit('confirm', false)"
      class="w3-button w3-display-topright">&times;</span>
      <h2 class="w3-green w3-container">{{title}}</h2>
      <div class="w3-container min-height-200">
          <slot></slot>
      </div>

      <div class="w3-bar w3-margin-top w3-display-bottom">
          <button
            class="w3-button w3-bar-item w3-text-red w3-light-gray"
            style="width: 50%"
            @click="$emit('confirm', false)"
        >No</button>
          <button
            class="w3-button w3-bar-item w3-text-green w3-light-gray"
            style="width: 50%"
            @click="$emit('confirm', true)"
        >Si</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style>
    .min-height-200 {
        min-height: 200px;
    }
</style>
