<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="main-layout__header">
      <div class="main-layout__header-item">
        <AppIcon />
        <NavigationElements />
      </div>
        <Profile />
    </a-layout-header>
    <a-layout-content class="main-layout__content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppIcon from "@/layouts/header/AppIcon.vue";
import NavigationElements from "@/layouts/header/NavigationElements.vue";
import Profile from "@/layouts/header/Profile.vue";

@Component({
  components: { AppIcon, NavigationElements, Profile },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss">
.main-layout {
  min-height: 100vh;
  &__header {
    background-color: $primary-color;
    color: white;
    position: fixed;
    height: 64px;
    width: 100%;
    padding: 0 400px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-item {
      display: flex;
      flex-direction: row;
      gap: 12px
    }
  }
  &__content {
    margin-top: 64px;
    padding: 24px 400px;
    background-color: #f6f7f8;
  }
}
</style>
