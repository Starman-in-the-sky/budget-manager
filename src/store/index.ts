import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import user from "./user";
import main from "./main";
import history from "./history";
import { IUserState } from "./user/state";
import { IMainState } from "./main/state";
import { IHistoryState } from "./history/state";

export interface IRootState {
  user: IUserState;
  main: IMainState;
  history: IHistoryState;
}

export default function store() {
  Vue.use(Vuex);

  return new Vuex.Store<IRootState>({
    modules: {
      user,
      main,
      history,
    },
  });
}
