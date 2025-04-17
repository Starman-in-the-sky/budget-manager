import {ECurrenciesDenominations, ECurrenciesSigns, TCategory, TCurrency, TTag} from "@/core/models";

export interface IMainState {
  defaultTypes: string[];
  defaultCategories: TCategory[];
  defaultTags: TTag[];
  defaultCurrencies: TCurrency[];
}

function state(): IMainState {
  return {
    defaultTypes: [
      'Доход',
      'Расход',
    ],
    defaultCategories: [
      { name: 'Продукты', icon: 'food'},
      { name: 'Транспорт', icon: 'transport'},
      { name: 'Перевод', icon: 'transfer'},
      { name: 'Зачисление', icon: 'wage'},
      { name: 'Хобби', icon: 'hobby'},
      { name: 'ЖКХ', icon: 'taxes'},
    ],
    defaultTags: [
      { name: "Трата", color: "red" },
      { name: "Лишнее", color: "yellow" },
      { name: "Траdsdта", color: "red" },
      { name: "Лишнdsfdsdsее", color: "yellow" },
    ],
    defaultCurrencies: [
      {
        sign: ECurrenciesSigns.RUB,
        denomination: ECurrenciesDenominations.RUB,
        rateToRuble: 1
      },
    ],
  }
}

export default state;