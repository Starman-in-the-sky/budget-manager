import { IMainState } from "@/store/main/state";
import { TCategory, TCurrency, TTag } from "@/core/models";
import { MutationTree } from 'vuex';

const mutation: MutationTree<IMainState> = {
  setCategories(state: IMainState, categories: TCategory[]) {
    state.defaultCategories = [...categories];
  },
  setCurrencies(state: IMainState, currencies: TCurrency[]) {
    state.defaultCurrencies = [...currencies];
  },
  setTags(state: IMainState, tags: TTag[]) {
    state.defaultTags = [...tags];
  },
}

export default mutation;