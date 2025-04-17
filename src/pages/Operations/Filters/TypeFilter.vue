<template>
  <a-select
    v-model="typeFilter"
    placeholder="Тип операции"
    class="filter"
    size="large"
    allowClear
  >
    <a-select-option
      v-for="type in operationsTypes"
      :value="type"
    >
      {{ type }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Mutation, State } from "vuex-class";

@Component({})
export default class TypeFilter extends Vue {
  @State(state => state.main.defaultTypes as unknown)
  operationsTypes!: string[];

  @State(state => state.history.filters.type)
  typeFromStore!: string | undefined;

  @Mutation("history/changeTypeFilter")
  changeTypeFilter!: (type: string | undefined) => void;

  get typeFilter(): string | undefined {
    return this.typeFromStore;
  }

  set typeFilter(value: string | undefined) {
    this.changeTypeFilter(value);
  }
}
</script>

<style scoped lang="scss">

</style>