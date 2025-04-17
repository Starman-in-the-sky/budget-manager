import { ECurrenciesAbbreviations, TCategory, TTag } from "@/core/models";

export interface IUserState {
  firstName: string;
  lastName: string;
  balance: number;
  currency: string | ECurrenciesAbbreviations.RUB;
  customCategories?: TCategory[];
  customTags?: TTag[];
}

function state(): IUserState {
  return {
    firstName: "",
    lastName: "",
    balance: 0,
    currency: ECurrenciesAbbreviations.RUB,
    customCategories: [],
    customTags: [],
  }
};

export default state;