import { Module } from "vuex";
import { IRootState } from "../index";
import state, { IHistoryState } from "./state";
import mutations from "./mutations";
import getters from "./getters"

const history: Module<IHistoryState, IRootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
};

export default history;