import { TCategory, TTag } from "@/core/models";

export interface IUserState {
  firstName: string;
  lastName: string;
  balance: number;
  currency: string;
  customCategories?: TCategory[];
  customTags?: TTag[];
}

function state(): IUserState {
  return {
    firstName: "",
    lastName: "",
    balance: 0,
    currency: "",
    customCategories: [],
    customTags: [],
  }
};

export default state;