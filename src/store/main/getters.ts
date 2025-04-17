import { GetterTree } from 'vuex';
import { IMainState } from './state';
import { IRootState } from '../index';
import { TCurrency, ECurrenciesDenominations } from '@/core/models';

const getters: GetterTree<IMainState, IRootState> = {
  getCurrencyByDenomination: (state) => (denomination: ECurrenciesDenominations): TCurrency | undefined => {
    return state.defaultCurrencies.find(currency => currency.denomination === denomination);
  },
  getBalance: (state, _getters, rootState) => {
    return rootState.history.operations.reduce((sum, operation) => {
      return sum + (operation.value ?? 0);
    }, 0);
  },
  getExpenses: (state, _getters, rootState) => {
    return rootState.history.operations.reduce((sum, operation) => {
      const value = operation.value ?? 0;
      return value < 0 ? sum + value : sum;
    }, 0);
  },
  getRefills: (state, _getters, rootState) => {
    return rootState.history.operations.reduce((sum, operation) => {
      const value = operation.value ?? 0;
      return value > 0 ? sum + value : sum;
    }, 0);
  },
  getAllCategories: (state, _getters, rootState) => {
    const customCategories = rootState.user.customCategories || [];
    return [...state.defaultCategories, ...customCategories];
  },
  getAllTags: (state, _getters, rootState) => {
    const customTags = rootState.user.customTags || [];
    return [...state.defaultTags, ...customTags];
  },
};

export default getters;
