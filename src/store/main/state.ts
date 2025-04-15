import { TCategory, TCurrency, TTag } from "@/core/models";

export interface IMainState {
  categories: TCategory[];
  tags: TTag[];
  currencies: TCurrency[];
}

function state(): IMainState {
  return {
    categories: [],
    tags: [],
    currencies: [],
  }
}

export default state;