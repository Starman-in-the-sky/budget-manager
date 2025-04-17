<template>
  <div class="value-filter">
    <a-input placeholder="От" size="large" class="value-filter__input"/>
    <a-input placeholder="До" size="large" class="value-filter__input"/>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class CategoryType extends Vue {

}
</script>

<style scoped lang="scss">
.value-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 80px;
  &__input {
    width: 75px;
    border-radius: 15px !important;
    border: 1px solid $primary-color !important;
    transition: all 0.3s ease;
    padding: 5px 12px;

    &:focus {
      border-color: $primary-color !important;
      box-shadow: 0 0 0 2px rgba($primary-color, 0.2) !important;
      outline: none;
    }
  }
}
</style>