<template>
  <div class="value-filter">
    <a-input-number
      v-model="minValue"
      placeholder="От"
      size="large"
      class="value-filter__input"
    />
    <a-input-number
      v-model="maxValue"
      placeholder="До"
      size="large"
      class="value-filter__input"
    />
  </div>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

@Component({})
export default class ValueFilter extends Vue {
  @State((state: any) => state.history.filters.minValue)
  minValueState!: number | undefined;

  @State((state: any) => state.history.filters.maxValue)
  maxValueState!: number | undefined;

  @Mutation('history/changeMinValueFilter')
  changeMinValueFilter!: (value: number | undefined) => void;

  @Mutation('history/changeMaxValueFilter')
  changeMaxValueFilter!: (value: number | undefined) => void;

  get minValue(): number | undefined {
    return this.minValueState;
  }
  set minValue(value: number | null | undefined) {
    this.changeMinValueFilter(value === null ? undefined : value);
  }

  get maxValue(): number | undefined {
    return this.maxValueState;
  }
  set maxValue(value: number | null | undefined) {
    this.changeMaxValueFilter(value === null ? undefined : value);
  }
}
</script>

<style scoped lang="scss">
.value-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 80px;
  &__input {
    width: 88px;
    border-radius: 15px !important;
    border: 1px solid $primary-color !important;
    transition: all 0.3s ease;
    padding: 5px 12px;

    ::v-deep .ant-input-number-handler-wrap {
      display: none;
    }

    ::v-deep .ant-input-number-input-wrap {
      display: flex;
      align-items: center;
      height: 100%;
    }

    ::v-deep .ant-input-number-input {
      padding: 0;
      text-align: center;
      font-size: 16px;
    }

    &:focus {
      border-color: $primary-color !important;
      box-shadow: 0 0 0 2px rgba($primary-color, 0.2) !important;
      outline: none;
    }
  }
}
</style>