import { IHistoryState, IOperation } from "@/store/history/state";
import { MutationTree } from 'vuex';

const mutation: MutationTree<IHistoryState> = {
  addOperationCategories(state, newOperations: IOperation[]) {
    state.operations = [...state.operations, ...newOperations];
  },
  changeTypeFilter(state, newValue: string){
    if (newValue === undefined) {
      state.filters.type = undefined;
    } else {
      state.filters.type = newValue;
    }
  }
}

export default mutation;