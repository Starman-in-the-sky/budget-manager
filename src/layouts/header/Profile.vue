<template>
  <div class="profile-button">
    <a-button
        type="primary"
        icon="user"
        size="large"
        class="ui-button-primary"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Profile extends Vue {}
</script>

<style scoped lang="scss">
.profile-button {
  padding: 0 15px;
}
</style>
