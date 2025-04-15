import { Module } from "vuex";
import { IRootState } from "../index";
import state, { IMainState } from "./state";
import mutations from "./mutations";
import getters from './getters';
import actions from "./actions";

const main: Module<IMainState, IRootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default main;