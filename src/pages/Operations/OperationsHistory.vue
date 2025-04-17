<template>
  <div class="operations-history">
    <div
      v-for="group in sortedByDayOperations"
      :key="group.day"
      class="operations-history__day"
    >
      <div class="title size24">{{ group.label }}</div>
      <a-button
        v-for="operation in group.operations"
        :key="operation.eventDateTime"
        class="operations-history__day-operation"
        type="link"
      >
        <div class="operations-history__day-operation-left">
          <a-avatar
            :src="getIconPath(operation.category.icon)"
            class="operations-history__day-operation-avatar"
          />
          <div class="operations-history__day-operation-titles">
            <div class="title size16">
              {{ operation.label }}
            </div>
            <div class="subtitle tags-line">
              {{ operation.category.name }}
              <div class="tags">
                <a-tag
                    v-for="tag in operation.tags"
                    :key="tag.name"
                    :color="tag.color"
                    class="tag"
                >
                  {{ tag.name }}
                </a-tag>
              </div>
            </div>
          </div>
        </div>
        <div class="operations-history__day-operation-right title size24">
          {{ (operation.value / currency.rateToRuble).toFixed(2) }}{{ currency.sign }}
        </div>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { IOperation, IOperationByDay } from "@/store/history/state";
import { Getter, State } from "vuex-class";
import {TCurrency} from "@/core/models";

@Component({})
export default class OperationsHistory extends Vue {
  @Prop()
  readonly operations!: IOperation[];

  @State(state => state.user.currency as unknown)
  currency!: TCurrency;

  @Getter('history/groupedOperationsByDay')
  sortedByDayOperations!: IOperationByDay[];

  operationsByDay: IOperationByDay[] = [];

  getIconPath(iconName: string): string {
    try {
      return require(`@/assets/images/icons/${iconName}.svg`);
    } catch (e) {
      return '';
    }
  }
}
</script>

<style scoped lang="scss">
.operations-history {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__day {
    background-color: #fff;
    border-radius: 15px;
    padding: 16px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    &-operation {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 8px 0;
      &-left {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
      &-avatar {
        margin-top: 8px;
        background-color: $primary-color;
      }
      &-titles {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}
.tags-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tag {
  font-size: 10px;
  line-height: 1;
}
</style>