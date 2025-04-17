import { IHistoryState, IOperation } from "@/store/history/state";
import { MutationTree } from 'vuex';
import { TTag } from "@/core/models";

const mutation: MutationTree<IHistoryState> = {
  addOperationCategories(state, newOperations: IOperation[]) {
    state.operations = [...state.operations, ...newOperations];
  },
  changeTypeFilter(state, newValue: string | undefined){
    if (newValue === undefined) {
      state.filters.type = undefined;
    } else {
      state.filters.type = newValue;
    }
  },
  changeCategoryFilter(state, newValue: string | undefined) {
    if (newValue === undefined) {
      state.filters.category = undefined;
    } else {
      state.filters.category = { name: newValue, icon: state.filters.category?.icon }; // если нужен только name
    }
  },
  changeMinValueFilter(state, newValue: number | undefined) {
    state.filters.minValue = newValue;
  },
  changeMaxValueFilter(state, newValue: number | undefined) {
    state.filters.maxValue = newValue;
  },
  changeDateFromFilter(state, newValue: string) {
    state.filters.dateFrom = newValue;
  },
  changeDateToFilter(state, newValue: string) {
    state.filters.dateTo = newValue;
  },
  changeTagsFilter(state, newTags: TTag[]) {
    state.filters.tags = newTags;
  },
}

export default mutation;