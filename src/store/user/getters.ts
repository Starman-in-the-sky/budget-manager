import { IUserState } from "./state";
import { IRootState } from "@/store";
import { GetterTree } from 'vuex';
import {ECurrenciesSigns} from "@/core/models";

const getters: GetterTree<IUserState, IRootState> = {
  fullName: (state: IUserState): string => {
    return `${state.firstName} ${state.lastName}`;
  },

  getCurrencySign: (state: IUserState): string => {
    const key = state.currency as keyof typeof ECurrenciesSigns;
    return ECurrenciesSigns[key] || ECurrenciesSigns.RUB;
  },
};

export default getters;