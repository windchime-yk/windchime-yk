<template>
  <svg
    version="1.1"
    baseProfile="full"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" x2="20" y1="1" y2="1" />
    <line x1="0" x2="20" y1="10" y2="10" />
    <line x1="0" x2="20" y1="19" y2="19" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
line {
  fill: transparent;
  stroke: $sub-text-color;
  stroke-linecap: round;
  stroke-width: 2;
}
</style>
