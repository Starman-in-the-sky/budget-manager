<template>
  <div class="operations">
    <div class="title">История</div>
    <Filters /> >
    <div class="operations-content">

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Operations extends Vue {}
</script>

<style lang="scss">
.operations {
  width: 100%;
}
</style>