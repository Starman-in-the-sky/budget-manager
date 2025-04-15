import { IUserState } from "./state";
import { IRootState } from "@/store";
import { GetterTree } from 'vuex';

const getters: GetterTree<IUserState, IRootState> = {
  fullName: (state: IUserState): string => {
    return `${state.firstName} ${state.lastName}`;
  },
};

export default getters;