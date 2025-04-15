import { GetterTree } from 'vuex';
import { IMainState } from './state';
import { IRootState } from '../index';
import { TCurrency, ECurrenciesDenominations } from '@/core/models';

const getters: GetterTree<IMainState, IRootState> = {
  getCurrencyByDenomination: (state) => (denomination: ECurrenciesDenominations): TCurrency | undefined => {
    return state.currencies.find(currency => currency.denomination === denomination);
  },
};

export default getters;
