<template>
  <div class="operations">
    <div class="operations-header">
      <div class="title size32">История</div>
      <a-button
        type="primary"
        class="ui-button-primary operations-header__button"
        size="large"
      >
        Добавить
      </a-button>
    </div>
    <Filters />
    <div class="operations-content">
      <OperationsHistory :operations="filteredOperations"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Filters from "@/pages/Operations/Filters/Filters.vue";
import OperationsHistory from "@/pages/Operations/OperationsHistory.vue";
import { State } from "vuex-class";
import { IOperation } from "@/store/history/state";

@Component({
  components: { OperationsHistory, Filters }
})
export default class Operations extends Vue {
  @State(state => state.history.operations as unknown)
  readonly operations!: IOperation[];

  filteredOperations: IOperation[] = [];

  mounted() {
    this.filteredOperations = this.operations;
  }
}
</script>

<style lang="scss">
.operations {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__button {
      border-radius: 15px;
    }
  }
}
</style>