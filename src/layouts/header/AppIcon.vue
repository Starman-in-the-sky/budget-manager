<template>
    <a-button
        type="primary"
        size="large"
        class="ui-button-primary"
        @click="navigateTo(ERouteNames.Main)"
    >
      <img src="@/assets/images/logos/logo.png" alt="Logo" class="app-icon-image" />
    </a-button>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ERouteNames } from "@/router/index";

@Component({})
export default class AppIcon extends Vue {
  ERouteNames = ERouteNames;

  navigateTo(routeName: ERouteNames) {
    if (this.$route.name !== routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>

<style scoped lang="scss">
.app-icon-image {
  width: 36px;
  height: 36px;
}
</style>
