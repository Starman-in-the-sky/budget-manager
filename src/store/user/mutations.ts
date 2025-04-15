import { IUserState } from "@/store/user/state";
import { TCategory, TTag } from "@/core/models";
import { MutationTree } from 'vuex';

const mutation: MutationTree<IUserState> = {
  setFirstName(state: IUserState, firstName: string) {
    state.firstName = firstName;
  },
  setLastName(state: IUserState, lastName: string) {
    state.lastName = lastName;
  },
  setCurrency(state: IUserState, currency: string) {
    state.currency = currency;
  },
  setCustomCategories(state: IUserState, categories: TCategory[]) {
    state.customCategories = [...categories];
  },
  setCustomTags(state: IUserState, tags: TTag[]) {
    state.customTags = [...tags];
  },
}

export default mutation;