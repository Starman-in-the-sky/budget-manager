import { IUserState } from "./state";
import { IRootState } from "@/store";
import { GetterTree } from 'vuex';
import { TCurrency } from "@/core/models";

const getters: GetterTree<IUserState, IRootState> = {
  fullName: (state: IUserState): string => {
    return `${state.firstName} ${state.lastName}`;
  },

  getCurrency(state: IUserState): TCurrency {
    return state.currency;
  },
};

export default getters;