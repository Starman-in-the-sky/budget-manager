import {
  ECurrenciesDenominations,
  ECurrenciesSigns,
  TCategory,
  TCurrency,
  TTag
} from "@/core/models";

export interface IUserState {
  firstName: string;
  lastName: string;
  balance: number;
  currency: TCurrency;
  customCategories?: TCategory[];
  customTags?: TTag[];
}

function state(): IUserState {
  const savedCategories = localStorage.getItem("categories");
  return {
    firstName: "",
    lastName: "",
    balance: 0,
    currency: {
      sign: ECurrenciesSigns.RUB,
      denomination: ECurrenciesDenominations.RUB,
      rateToRuble: 1
    },
    customCategories: savedCategories
    ? JSON.parse(savedCategories)
    : [
      { name: 'Развлечения'}
    ],
    customTags: [],
  }
};

export default state;