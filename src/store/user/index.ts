import { Module } from "vuex";
import { IRootState } from "../index";
import state, { IUserState } from "./state";
import mutations from "./mutations";
import getters from "./getters";

const user: Module<IUserState, IRootState> = {
    namespaced: true,
    state,
    mutations,
    getters,
};

export default user;
