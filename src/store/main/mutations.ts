import { IMainState } from "@/store/main/state";
import { TCategory, TCurrency, TTag } from "@/core/models";
import { MutationTree } from 'vuex';

const mutation: MutationTree<IMainState> = {
  setCategories(state: IMainState, categories: TCategory[]) {
    state.categories = [...categories];
  },
  setCurrencies(state: IMainState, currencies: TCurrency[]) {
    state.currencies = [...currencies];
  },
  setTags(state: IMainState, tags: TTag[]) {
    state.tags = [...tags];
  },
}

export default mutation;