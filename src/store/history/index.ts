import { Module } from "vuex";
import { IRootState } from "../index";
import state, { IHistoryState } from "./state";
import mutations from "./mutations";

const history: Module<IHistoryState, IRootState> = {
  namespaced: true,
  state,
  mutations,
};

export default history;