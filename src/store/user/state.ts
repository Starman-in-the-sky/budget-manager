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
    customTags: [
      { name: "Магазин", color: "#ff4d4f" },
      { name: "Семья", color: "#52c41a" },
      { name: "Работа", color: "#1890ff" },
      { name: "Метро", color: "#722ed1" },
      { name: "Кино", color: "#eb2f96" },
    ],
  }
}

export default state;