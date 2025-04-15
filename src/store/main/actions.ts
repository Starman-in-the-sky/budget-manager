import { ActionTree } from 'vuex';
import axios from 'axios';

import { IRootState } from "@/store";
import { IMainState } from "./state";

import { ECurrenciesDenominations, ECurrenciesSigns, TCurrency } from "@/core/models";

const actions: ActionTree<IMainState, IRootState> = {
  async getCurrencies({ commit }) {
    const url = "https://www.cbr.ru/scripts/XML_daily.asp";

    try {
      const res = await axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, { responseType: "document" });
      const xml = res.data as Document;

      const neededCodes = ['USD', 'EUR', 'GBP'];
      const currencyMap: Record<string, Partial<TCurrency>> = {
        USD: { denomination: ECurrenciesDenominations.Dollar, sign: ECurrenciesSigns.Dollar },
        EUR: { denomination: ECurrenciesDenominations.Euro, sign: ECurrenciesSigns.Euro },
        GBP: { denomination: ECurrenciesDenominations.Pound, sign: ECurrenciesSigns.Pound },
      };

      const valutes = Array.from(xml.querySelectorAll("Valute"));
      const currencies: TCurrency[] = [];

      for (const valute of valutes) {
        const charCode = valute.querySelector("CharCode")?.textContent;
        if (!charCode || !neededCodes.includes(charCode)) continue;

        const valueText = valute.querySelector("Value")?.textContent;
        const nominalText = valute.querySelector("Nominal")?.textContent;
        if (!valueText || !nominalText) continue;

        const rate = parseFloat(valueText.replace(",", ".")) / parseInt(nominalText);
        const base = currencyMap[charCode];

        if (base) {
          currencies.push({
            sign: base.sign!,
            denomination: base.denomination!,
            rateToRuble: rate,
          });
        }
      }

      commit("setCurrencies", currencies);
    } catch (e) {
      console.error("Ошибка при загрузке курсов валют:", e);
    }
  },
}

export default actions;