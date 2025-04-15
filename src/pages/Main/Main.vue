<template>
  <div class="main-page">
    <Information />
    <Currencies />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Information from "@/pages/Main/Information/Information.vue";
import Currencies from "@/pages/Main/Currencies/Currencies.vue";

@Component({
  components: {Currencies, Information }
})
export default class Main extends Vue {}
</script>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
}
</style>
