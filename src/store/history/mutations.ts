import { IHistoryState, IOperation } from "@/store/history/state";
import { MutationTree } from 'vuex';
import { TTag } from "@/core/models";

const mutation: MutationTree<IHistoryState> = {
  addOperationCategories(state, newOperations: IOperation[]) {
    state.operations = [...state.operations, ...newOperations];
    localStorage.setItem("operations", JSON.stringify(state.operations));
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
  updateOperation(state: any, updatedOperation: IOperation) {
    const index = state.operations.findIndex(
      (operation: IOperation) => operation.eventDateTime === updatedOperation.eventDateTime
    );
    if (index !== -1) {
      state.operations.splice(index, 1, updatedOperation);
      localStorage.setItem("operations", JSON.stringify(state.operations));
    }
  },
  addOperation(state: any, newOperation: IOperation) {
    state.operations.push(newOperation);
    localStorage.setItem("operations", JSON.stringify(state.operations));
  },
  deleteOperation(state, operationToDelete: IOperation) {
    state.operations = state.operations.filter(op => {
      return op.eventDateTime !== operationToDelete.eventDateTime;
    });
    localStorage.setItem("operations", JSON.stringify(state.operations));
  },
}

export default mutation;