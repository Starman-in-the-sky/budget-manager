<template>
  <div class="navigation-buttons">
    <a-button
        v-for="item in navItems"
        :key="item.route"
        class="ui-button-primary"
        type="primary"
        size="large"
        @click="navigateTo(item.route)"
    >
      {{ item.label }}
    </a-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ERouteNames } from "@/router/index";

interface NavItem {
  label: string;
  route: ERouteNames;
}

@Component({})
export default class NavigationElements extends Vue {
  navItems: NavItem[] = [
    { label: "Главная", route: ERouteNames.Main },
    { label: "Операции", route: ERouteNames.Operations },
    { label: "Аналитика", route: ERouteNames.Analytics },
  ];

  navigateTo(routeName: ERouteNames) {
    if (this.$route.name !== routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-buttons {
  display: flex;
  gap: 12px;
}
</style>
