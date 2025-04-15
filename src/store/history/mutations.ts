import { IHistoryState, IOperation } from "@/store/history/state";
import { TCategory, TTag } from "@/core/models";
import { MutationTree } from 'vuex';

const mutation: MutationTree<IHistoryState> = {
  addOperationCategories(state, newOperations: IOperation[]) {
    state.operations = [...state.operations, ...newOperations];
  },
}

export default mutation;